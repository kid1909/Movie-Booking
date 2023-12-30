import User from '../models/UserModel.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../errors/customErrors.js'

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne(req.body.email)
  const userWithoutPassword = user.toJSON()
  res.json({ msg: `Hello ${user.name} `, userWithoutPassword })
}

