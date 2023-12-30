import mongoose from 'mongoose'
import { RATING } from '../utils/constants.js'

const MovieSchema = new mongoose.Schema({
  title: String,
  releaseDate: Date,
  length: String,
  rating: {
    type: String,
    enum: Object.values(RATING),
    default: RATING.PG,
  },
  summary: String,
  posterURL: String,
  trailerURL: String,
  totalSeats: {
    type: Object,
    min: 0,
    max: 10, // Set your desired default value
    required: true,
  },
  new: Boolean,
})

// Custom method to adjust available seats when a ticket is sold
// MovieSchema.methods.adjustAvailableSeats = async function (soldTickets) {
//   // Ensure soldTickets is a positive number
//   const soldTicketsCount = Math.max(0, Math.floor(soldTickets))

//   // Calculate the new available seats
//   const currentAvailableSeats = this.availableSeats || 0
//   const newAvailableSeats = Math.max(
//     0,
//     currentAvailableSeats - soldTicketsCount
//   )

//   // Update the document with the new availableSeats value
//   this.availableSeats = newAvailableSeats

//   // Save the updated document
//   await this.save()

//   // Return the updated document
//   return this
// }

export default mongoose.model('Movie', MovieSchema)
