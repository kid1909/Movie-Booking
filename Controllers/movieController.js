import Movie from '../models/MovieModel.js'
import { StatusCodes } from 'http-status-codes'

export const createMovie = async (req, res) => {
  const movie = await Movie.create(req.body)
  res.json({ msg: 'movie created' })
}

export const getMovieInfo = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findById(id)

    if (!movie) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: 'Movie not found' })
    }

    console.log({ movie })
    res.status(StatusCodes.OK).json({ movie })
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Internal Server Error' })
  }
}

export const getAllMovies = async (req, res) => {
  const movies = await Movie.find()

  res.status(StatusCodes.OK).json({ movies })
}
