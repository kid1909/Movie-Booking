import { useNavLinksContext } from './Navlinks'
import Wrapper from '../assets/wrappers/Login'
import { FaTimes } from 'react-icons/fa'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
import { Form } from 'react-router-dom'
import { useHomeLayoutContext } from '../Pages/HomeLayout'
import { Link } from 'react-router-dom'
// import { log } from 'console'
// import { Profile } from '../components'

// import { useHistory } from 'react-router-dom' // Import useHistory to redirect
export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    const response = await customFetch.post('/auth/login', data)

    toast.success('Login succesful')
    const user = response.data.user

    return user
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}
const Login = () => {
  const { toggleSidebar, sideBarName, showSidebar } = useNavLinksContext()
  // const { user } = useActionData()
  const { user, logoutUser } = useHomeLayoutContext()
  console.log(user.name)
  // console.log(user)
  const handleLogout = async () => {
    await logoutUser()
    toggleSidebar()

    window.location.reload()
  }

  return (
    <Wrapper>
      {/* <div className={`container ${showSidebar ? 'show-sidebar' : ''}`}> */}
      <div className="overlay">
        {user.name ? (
          <div className="container show-sidebar">
            <FaTimes className="close-btn" onClick={toggleSidebar} />
            Hello {user.name}
            <Link to="/tickets" onClick={toggleSidebar}>
              Tickets
            </Link>
            <button type="submit" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="container show-sidebar">
            <Form method="post" className="login-form">
              <FaTimes className="close-btn" onClick={toggleSidebar} />
              <h2>Log In</h2>
              <span>
                Don't have an account? <a>Sign Up</a>
              </span>
              <h4 className="header">Login</h4>
              <label htmlFor="email">
                Email*
                <br />
                <input type="email" name="email" label="email" required />
              </label>
              <label htmlFor="password">
                Password* <br />
                <input
                  type="password"
                  name="password"
                  label="password"
                  required
                />
              </label>
              <div className="mt-4">
                <button type="submit" className="login-btn">
                  LOG IN &gt;{' '}
                </button>
              </div>
            </Form>

            <div className="line"></div>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default Login
