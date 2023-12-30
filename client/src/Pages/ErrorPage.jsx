import { Link , useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error.data)
  return (
    <>
      <h1>404 Something is wrong </h1>
      <Link to="/">Go Home</Link>
    </>
  )
}
export default ErrorPage
