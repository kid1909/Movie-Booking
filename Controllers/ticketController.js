import Ticket from '../models/TicketModel.js'


export const createTicket = async (req,res) => {
    res.json({msg:'ticket created'})
}
