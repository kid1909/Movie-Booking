import Wrapper from '../assets/wrappers/MovieContainer'
import { Link } from 'react-router-dom'

const MovieContainer = ({ movies }) => {
  return (
    <Wrapper>
      <div className="container">
        {movies.map((item) => {
          const { _id, title, releaseDate, posterURL } = item
          return (
            <div key={_id} className="movie-info">
              <Link key={_id} to={`/movies/${_id}`}>
                <img src={posterURL} className="movie-poster" />
              </Link>

              <p>{title}</p>
              <p>Watch Trailer</p>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}
export default MovieContainer
