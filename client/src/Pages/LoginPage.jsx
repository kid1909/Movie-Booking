import { Link } from 'react-router-dom'
import { Login } from '../components'

const LoginPage = () => {
  return (
    <>
      <Login />
      <Link to="/register"> Register</Link>
    </>
  )
}
export default LoginPage
