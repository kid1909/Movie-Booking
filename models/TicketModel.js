import mongoose from 'mongoose'

const TicketSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true,
  },
  showtime: {
    type: Date,
    required: true,
  },
  seatNumber: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },
  // Add more fields as needed
})

export default mongoose.model('Ticket', TicketSchema)
