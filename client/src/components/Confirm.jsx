// import { log } from 'console'
import Wrapper from '../assets/wrappers/Confirm'
import { FaTimes } from 'react-icons/fa'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
// import { useLoaderData } from 'react-router'

// export const loader = async () => {
//   try {
//     const { data } = await customFetch.get('/users/current-user')
//     const user = data.userWithoutPassword
//     return user
//   } catch (error) {
//     const user = {}
//     return user
//   }
// }

const Confirm = ({
  selectSeats,
  confirmInfo,
  toggleConfirmInfo,
  title,
  releaseDate,
  userInfo,
  _id,
  // user,
}) => {
  // const user = useHomeLayoutContext()
  // const user = useLoaderData()

  const userId = userInfo.userInfo._id
  console.log(selectSeats)
  const saveTicket = async () => {
    try {
      // Gather all the data into a single object
      const confirmData = {
        movieId: _id,
        userId: userId,
        totalSeats: selectSeats,
        releaseDate,
        // Add any other data you need
      }
      // Send the confirmData object to the server
      const response = await customFetch.post(`/tickets/${_id}`, confirmData)
      // const savedTicket = response.data
      // const confirmSeat = await customFetch.get(`/ticket/${_id}`)
  
      toast.success('Tickets confirmed')
      setTimeout(() => {
        window.location = '/tickets'
      }, 1000)
      // toggleSidebar()
    } catch (error) {
      // Handle errors
      console.error('Error saving ticket:', error)
      toast.error(error?.response?.data?.msg)
    }
  }

  return (
    <Wrapper>
      <div className={`confirm-container ${confirmInfo ? 'show' : ''}`}>
        {/* <div className={`confirm-container`}> */}
        <FaTimes className="close-btn" onClick={() => toggleConfirmInfo()} />
        {/* {user} */}
        <span>Here is your ticket :</span>
        <span>Movie : {title}</span>
        <span>Date : {releaseDate}</span>
        <span>Seats : </span>
        {Object.entries(selectSeats).map(([seatCategory, seatDetails]) => (
          <div key={seatCategory}>
            {Object.entries(seatDetails)
              .filter(([isSelected]) => isSelected)
              .map(([seat]) => (
                <p key={seat}> {seat} </p>
              ))}
          </div>
        ))}
        <button onClick={() => saveTicket()}>Confirm</button>
      </div>
    </Wrapper>
  )
}
export default Confirm
