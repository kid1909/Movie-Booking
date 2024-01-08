import customFetch from '../utils/customFetch'
import TicketContainer from '../components/TicketContainer'
import { useLoaderData } from 'react-router-dom'
import Wrapper from '../assets/wrappers/TicketPage'
import { useState } from 'react'

const formatDateTime = (dateTimeString) => {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'UTC', // Adjust the time zone if needed
  }

  return new Date(dateTimeString).toLocaleString('en-US', options)
}
export const loader = async () => {
  try {
    const { data } = await customFetch('/tickets')

    const tickets = data.msg

    // const tickets = data.msg[0].selectSeats
    const movieIds = tickets.map((ticket) => ticket.movieId)

    // Fetch movie data for each movieId
    const moviePromises = movieIds.map(async (movieId) => {
      return customFetch(`/movies/${movieId}`)
    })

    const getUser = await customFetch('/users/current-user')
    const user = getUser.data.userWithoutPassword.name
    console.log(user)
    // Wait for all movie promises to resolve
    const movieResponses = await Promise.all(moviePromises)
    // console.log(response.data.movie.title)
    // Extract movie titles from movieResponses
    const movieTitles = movieResponses.map(
      (response) => response.data.movie.title
    )
    const movieTitlesDate = movieResponses.map(
      (response) => response.data.movie.releaseDate
    )

    // Log information
    // console.log(tickets)
    // console.log(movieResponses)
    // console.log(movieTitles)
    console.log(movieTitlesDate)
    return { tickets, movieResponses, movieTitles, user, movieTitlesDate }
  } catch (error) {
    console.log(error)
  }
  return null
}
const Ticket = () => {
  const { tickets, movieResponses, movieTitles, user, movieTitlesDate } =
    useLoaderData()
  const [toggleSmallCancel, setToggleSmallCancel] = useState(false)
  const [selectedTicketId, setSelectedTicketId] = useState(null)
  const deleteTicket = async (ticketId) => {
    try {
      await customFetch.delete(`/tickets/${ticketId}`)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  const toggleCancel = (ticketId) => {
    setToggleSmallCancel(!toggleSmallCancel)
    setSelectedTicketId(ticketId)
  }
  if (!tickets) {
    // Loading state or handle the case when tickets are not available
    return <div>Loading...</div>
  }
  // console.log(`last log ${tickets}`)
  // console.log('ticket page')
  return (
    <Wrapper>
      <div
        className={`ticket-overlay ${toggleSmallCancel ? 'show-sidebar' : ''}`}
      ></div>
      <div className="ticket-container">
        <h2>Your Tickets</h2>
        <table>
          <thead>
            <tr>
              <th>Movie Title</th>
              <th>Seats</th>
              <th>Date</th>
              <th>User </th>

              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={ticket._id}>
                <td>{movieTitles[index]}</td>
                <td>
                  <ul>
                    {Object.entries(ticket.selectSeats).map(
                      ([seatRow, seatRowObj]) => (
                        <li key={seatRow}>
                          Row {seatRow}: Seat{' '}
                          {Object.keys(seatRowObj).join(', ')}
                        </li>
                      )
                    )}
                  </ul>
                </td>
                <td>{formatDateTime(movieTitlesDate[index])}</td>
                <td>{user}</td>
                <td>
                  <button
                    className="cancel-btn"
                    onClick={() => toggleCancel(ticket._id)}
                  >
                    Cancel
                  </button>
                </td>
                {/* Additional table cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className={`cancel-window ${toggleSmallCancel ? 'show-sidebar' : ''}`}
        >
          <span className="confirm-cancel"> Confirm cancel ticket ?</span>
          <div className="confirm-btn">
            {' '}
            <button onClick={() => deleteTicket(selectedTicketId)}>Yes</button>
            <button onClick={() => toggleCancel()}>No</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Ticket
