import 'express-async-errors'
import express from 'express'
const app = express()
import morgan from 'morgan'
import * as dotenv from 'dotenv'
// import router
import userRouter from './routes/userRouter.js'
import authController from './routes/authRouter.js'
import movieController from './routes/movieRouter.js'
import ticketRouter from './routes/ticketRouter.js'

// import middleware

import {authenticateUser} from './middleware/authMiddleware.js'

import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

dotenv.config()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use(cookieParser())

// app.get('/api/v1', (req, res) => {
//   res.send('Hello world')
// })

// router use
app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' })
})

app.use('/api/v1/users', authenticateUser, userRouter)
app.use('/api/v1/auth', authController)
app.use('/api/v1/movies', movieController)
app.use('/api/v1/tickets', authenticateUser, ticketRouter)

app.post('/', (req, res) => {
  console.log(process.env.NODE_ENV)
  res.json({ message: 'data receive', data: req.body })
})

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' })
})



// app.use((err,req,res,next)=>{
//   console.log(err);
//   res.status(500).json({msg:'something went wrong'})
// })

const port = process.env.PORT || 5100
try {
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(5100, () => {
    console.log(`server running... on port ${port}`)
  })
} catch (error) {
  console.log(error)
  process.exit(1)
}
