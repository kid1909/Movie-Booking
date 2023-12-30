import { Router } from 'express'
import {
  createTicket,
  getAllTickets,
  getSingleTicket,
  updateTotalSeats,
  cancelTicket
} from '../Controllers/ticketController.js'
// import { authorizePermissions } from '../middleware/authMiddleware.js'

const router = Router()

router.post('/:id', createTicket)
router.post('/edit/:id', updateTotalSeats)
router.get('/', getAllTickets)
router.get('/:id', getSingleTicket)
router.delete('/:id', cancelTicket)

export default router