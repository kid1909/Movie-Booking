import { MovieInfo } from '../components'
import { useHomeLayoutContext } from './HomeLayout'

const SingleMovie = () => {
  const user = useHomeLayoutContext()
  // const user = user.user
  const userInfo = user.user
  return <MovieInfo userInfo={userInfo} />
}
export default SingleMovie
