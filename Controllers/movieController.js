import Movie from '../models/MovieModel.js'


export const createMovie = async (req,res) => {
    const movie = await Movie.create(req.body)
    res.json({msg:"movie created"})
}