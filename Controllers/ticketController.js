import Ticket from '../models/TicketModel.js'
import Movie from '../models/MovieModel.js'
import { StatusCodes } from 'http-status-codes'

export const updateTotalSeats = async (req, res) => {
  try {
    const { id } = req.params || {}

    if (!id) {
      throw new Error('Invalid request parameters')
    }

    const existingMovie = await Movie.findById(id)

    if (!existingMovie) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: 'No Movie Found Error' })
    }

    // Update specific seats within the existing totalSeats
    const updatedTotalSeats = { ...existingMovie.totalSeats }

    // Iterate over categories in req.body.totalSeats
    for (const category in req.body.totalSeats) {
      // Check if the category exists in the movie's totalSeats
      if (existingMovie.totalSeats.hasOwnProperty(category)) {
        // Iterate over seats within the category
        for (const seat in req.body.totalSeats[category]) {
          // Check if the seat exists in the movie's totalSeats[category]
          if (existingMovie.totalSeats[category].hasOwnProperty(seat)) {
            // Check if the seat is already false
            if (existingMovie.totalSeats[category][seat] === false) {
              throw new Error(`Seat ${category}:${seat} is already false`)
            }

            // Update the seat value
            updatedTotalSeats[category][seat] =
              req.body.totalSeats[category][seat]
          }
        }
      }
    }

    // Update totalSeats in the database
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { totalSeats: updatedTotalSeats },
      { new: true }
    )

    console.log('Updated movie:', updatedMovie)
    res.status(StatusCodes.OK).json({ msg: 'Seats updated successfully' })
  } catch (error) {
    console.error('Error updating totalSeats:', error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })
  }
}

// Separate function to update totalSeats for createTicket

export const createTicket = async (req, res) => {
  let existingMovie
  let id
  try {
    ;({ id } = req.params || {})

    if (!id) {
      throw new Error('Invalid request parameters')
    }

    existingMovie = await Movie.findById(id)
    // console.log(existingMovie)
    if (!existingMovie) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: 'No Movie Found Error' })
    }
  } catch (error) {
    console.log(error)
  }

  const updatedTotalSeats = { ...existingMovie.totalSeats }
  console.log(updatedTotalSeats)
  // Iterate over categories in req.body.totalSeats
  for (const category in req.body.totalSeats) {
    // Check if the category exists in the movie's totalSeats
    if (existingMovie.totalSeats.hasOwnProperty(category)) {
      // Iterate over seats within the category
      for (const seat in req.body.totalSeats[category]) {
        // Check if the seat exists in the movie's totalSeats[category]
        if (existingMovie.totalSeats[category].hasOwnProperty(seat)) {
          // Check if the seat is already false
          if (existingMovie.totalSeats[category][seat] === false) {
            throw new Error(`Seat ${category}:${seat} is already false`)
          }

          // Update the seat value
          updatedTotalSeats[category][seat] =
            req.body.totalSeats[category][seat]
        }
      }
    }
  }
  const updateContent = {
    totalSeats: updatedTotalSeats,
    showtime: req.body.showtime,
    userId: req.body.userId,
  }
  console.log(updateContent)
  // Update totalSeats in the database
  const updatedMovie = await Movie.findByIdAndUpdate(
    id,
    { $set: updateContent },
    { new: true }
  )
  // Create a ticket in your TicketModel
  const newTicket = new Ticket({
    movieId: id,
    userId: req.body.userId,
    selectSeats: req.body.totalSeats,
    // Add other ticket details as needed
  })

  // Save the new ticket to the database
  try {
    const savedTicket = await newTicket.save()
    console.log('Created ticket:', savedTicket)
  } catch (ticketError) {
    console.error('Error creating ticket:', ticketError)
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'Error creating ticket' })
  }

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Movie and ticket updated successfully' })
}

export const getAllTickets = async (req, res) => {
  const allTickets = await Ticket.find()

  res.status(StatusCodes.OK).json({ msg: allTickets })
}

export const getSingleTicket = async (req, res) => {
  const { id } = req.params
  const ticket = await Ticket.findById(id)
  res.status(StatusCodes.OK).json({ msg: ticket })
}

let selectSeatsState = {}

export const cancelTicket = async (req, res) => {
  const { id } = req.params

  try {
    // Find the ticket by ID
    const ticket = await Ticket.findById(id)

    if (!ticket) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: 'Cannot find ticket' })
    }

    // Find the movie by ID
    const movie = await Movie.findById(ticket.movieId)

    if (!movie) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: 'Cannot find movie' })
    }

    // Extract section and seat details from the ticket
    const selectSeats = ticket.selectSeats

    // Iterate over each section in selectSeats
    for (const section in selectSeats) {
      if (selectSeats.hasOwnProperty(section)) {
        // Iterate over each seat in the section
        for (const seat in selectSeats[section]) {
          if (selectSeats[section].hasOwnProperty(seat)) {
            // Ensure that movie.totalSeats is defined
            movie.totalSeats = movie.totalSeats || {}

            // Ensure that movie.totalSeats[section] is defined
            movie.totalSeats[section] = movie.totalSeats[section] || {}

            // Set the value to true based on the section and seat from the ticket
            movie.totalSeats[section][seat] = true
          }
        }
      }
    }

    // Save the updated movie to the database
    const result = await Movie.updateOne(
      { _id: movie._id },
      { $set: { totalSeats: movie.totalSeats } }
    )

    console.log('Update result:', result)

    // Delete the ticket from the database
    await Ticket.findByIdAndDelete(id)

    res.status(StatusCodes.OK).json({ msg: 'Ticket canceled successfully' })
  } catch (error) {
    console.error('Error canceling ticket:', error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'Internal server error' })
  }
}
