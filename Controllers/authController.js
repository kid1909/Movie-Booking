import User from '../models/UserModel.js'
import { StatusCodes } from 'http-status-codes'
import { comparePassword, hashPassword } from '../utils/passwordUtils.js'
import { UnauthenticatedError } from '../errors/customErrors.js'
export const register = async (req, res) => {
   const hashedPassword = await hashPassword(req.body.password)

   req.body.password = hashedPassword
   const user = await User.create(req.body)
  res.status(StatusCodes.CREATED).json({ msg: 'register' })
}

export const login = async (req, res) => {
   const user = await User.findOne({ email: req.body.email })
   const isValidUser =
     user && (await comparePassword(req.body.password, user.password))
  
  if (!isValidUser) {
    throw new UnauthenticatedError(' Wrong credentials')
  }
  res.status(StatusCodes.OK).json({ msg: 'user logged in' })
}
