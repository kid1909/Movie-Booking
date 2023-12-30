import customFetch from '../utils/customFetch'
import MovieContainer from './MovieContainer'
import { useLoaderData } from 'react-router-dom'
// import { movies } from '../utils/links'
// import Wrapper from '../assets/wrappers/ListMovies'

export const loader = async () => {
  // console.log(request.url)
  const response = await customFetch('/movies')
  // const movies = movies
  // console.log(response.data.data)
  return { movies: response.data.movies }
  // return null
}
// export const loader = async () => {
//   console.log('loader movie')
// }

const ListMovies = () => {
  const { movies } = useLoaderData()
  // console.log(movies)
  return (
    <>
      <MovieContainer movies={movies} />
    </>
  )
}
export default ListMovies
