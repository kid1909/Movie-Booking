import { replaceEqualDeep } from '@tanstack/react-query'
import {
  UnauthenticatedError,
  UnauthorizedError,
  BadRequestError,
} from '../errors/customErrors.js'
import { verifyJWT } from '../utils/tokenUtils.js'

// export const authenticateUser = (req, res, next) => {
//   const { token } = req.cookies
//   if (!token) throw new UnauthenticatedError('authentication invalid')
//   try {
//     const { userId, role } = verifyJWT(token)
//     // const testUser = userId === '654965d40d7550e3c6b5e750'
//     req.user = { userId, role, testUser }

//     next()
//   } catch (error) {
//     throw new UnauthenticatedError('authentication invalid')
//   }
// }

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies

  if (!token) throw new UnauthenticatedError('authentication invalid')
  try {
    const { userId, role } = verifyJWT(token)

    next()
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid')
  }
}

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    // console.log(roles)
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('Unauthorzied to access this route')
    }
    next()
  }
}
