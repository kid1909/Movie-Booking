import { Router } from 'express'
import { createTicket } from '../Controllers/ticketController.js'

const router = Router ()

router.post('/',createTicket)

export default router