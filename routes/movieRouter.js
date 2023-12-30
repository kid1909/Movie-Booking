import { Router } from "express";
import {
  createMovie,
  getMovieInfo,
  getAllMovies,
} from '../Controllers/movieController.js'

const router = Router()

router.post('/admin/createMovie', createMovie)
router.get('/:id', getMovieInfo)
router.get('/', getAllMovies)




export default router