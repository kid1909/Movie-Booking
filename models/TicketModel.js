import mongoose from 'mongoose'

const TicketSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
      required: true,
    },
    showtime: {
      type: String,
    },
    selectSeats: {
      type: Object,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    createAt: Date,
  },
  { timestamps: true }
)

export default mongoose.model('Ticket', TicketSchema)
