import Wrapper from '../assets/wrappers/Movieinfo'
// import { movies } from '../utils/links'
import { useState } from 'react'
import Confirm from './Confirm'
import { FaTimes } from 'react-icons/fa'
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom'
import { useHomeLayoutContext } from '../Pages/HomeLayout'


export const loader = async ({ params }) => {
  const response = await customFetch(`/movies/${params.id}`)
  return { movie: response.data.movie }
  // return null
}

const MovieInfo = (userInfo) => {
  const { movie } = useLoaderData()
  const {
    _id,
    title,
    releaseDate,
    summary,
    genrer,
    length,
    rating,
    posterURL,
    totalSeats,
  } = movie
  const [selectSeats, setSelectSeats] = useState({})
  const [seatInfo, setSeatInfo] = useState(false)
  const [confirmInfo, setConfirmInfo] = useState(false)
  // console.log(userInfo)
  const toggleSeatInfo = () => {
    setSeatInfo(!seatInfo)
  }
  const toggleConfirmInfo = () => {
    setConfirmInfo(!confirmInfo)
    console.log(confirmInfo)
  }
const handleSeatClick = (section, seat) => {
  setSelectSeats((prevTickets) => {
    // Create a copy of the previous state to avoid mutation
    const updatedTickets = { ...prevTickets }

    // Ensure the section exists in the state
    updatedTickets[section] = updatedTickets[section] || {}

    // Set the seat to false if it's not present or already true
    updatedTickets[section][seat] = !updatedTickets[section]?.[seat]

    // If the seat is true, toggle it to false
    if (updatedTickets[section][seat]) {
      updatedTickets[section][seat] = false
    }

    // Log the updated state
    console.log('Updated Tickets:', updatedTickets)

    // Return the updated state
    return updatedTickets
  })
}








  // useEffect(() => {
  //   console.log('Current Tickets State:', tickets)
  // }, [tickets])
  // Helper function to render seats for a given section
  const renderSeats = (section, seats) => {
    return Object.keys(seats).map((seat) => (
      <div key={seat} className="seat-container">
        <input
          type="checkbox"
          id={seat}
          className={`seat-btn ${seats[seat] ? 'available' : 'taken'}`}
          value={seat}
          onChange={() => handleSeatClick(section, seat)}
          disabled={!seats[seat]} // Disable the checkbox if the seat is "taken"
        />

        <label className="seat-label" htmlFor={seat}>
          {seat}
        </label>
      </div>
    ))
  }
  const renderSections = () => {
    return Object.keys(totalSeats).map((section) => (
      <div key={section} className="section">
        <h3>{section}</h3>
        <div className="seats">{renderSeats(section, totalSeats[section])}</div>
      </div>
    ))
  }

  // const {user} = useHomeLayoutContext

  return (
    <Wrapper>
      <div className="movie-info">
        <span className="movie-title">{title}</span>
        <p>{releaseDate}</p>
        <div className="info-group">
          <img src={posterURL} className="movie-poster" />
          <div className="movie-info-group">
            <button className="ticket-btn" onClick={() => toggleSeatInfo()}>
              Get tickets
            </button>{' '}
            <span>
              length <br />
              {length}
            </span>
            <span>
              ratings <br />
              {rating}
            </span>
            <span>
              genrer
              <br />
              {genrer}
            </span>
          </div>
        </div>
      </div>
      <div className={`seat-info ${seatInfo ? 'show' : ''}`}>
        <FaTimes className="close-btn" onClick={() => toggleSeatInfo()} />
        <span className="movie-title">{title}</span>
        <img src={posterURL} className="movie-poster" />
        <p>Date: {releaseDate}</p>
        <div className="movie-seats">
          <h2 className="seat-selection">
            Selection Seats :{' '}
            {Object.entries(selectSeats).map(([seatCategory, seatDetails]) => (
              <div key={seatCategory}>
                {Object.entries(seatDetails)
                  .filter(([isSelected]) => isSelected)
                  .map(([seat]) => (
                    <p key={seat}> {seat} </p>
                  ))}
              </div>
            ))}
          </h2>
          <h2>Available Seats</h2>

          {renderSections()}
        </div>
        <button
          type="submit"
          className="submit-ticket-btn"
          onClick={() => toggleConfirmInfo()}
        >
          Submit
        </button>
      </div>
      <Confirm
        selectSeats={selectSeats}
        confirmInfo={confirmInfo}
        toggleConfirmInfo={toggleConfirmInfo}
        title={title}
        releaseDate={releaseDate}
        userInfo={userInfo}
        _id={_id}
      />
    </Wrapper>
  )
}
export default MovieInfo
