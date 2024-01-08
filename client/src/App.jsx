import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  Landing,
  Ticket,
  LoginPage,
  Register,
  HomeLayout,
  ErrorPage,
  SingleMovie,
} from './Pages'
//loader
import { loader as movieLoader } from './components/ListMovies'
import { loader as singleMovieLoader } from './components/MovieInfo'
import { loader as homeLayoutUserLoader } from './Pages/HomeLayout'
import { loader as ticketLoader } from './Pages/Ticket'
import { action as loginAction } from './components/Login'
// import LoginPage from './Pages/LoginPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    loader: homeLayoutUserLoader,
    action: loginAction,

    children: [
      { index: true, element: <Landing />, loader: movieLoader },
      {
        path: 'movies/:id',
        element: <SingleMovie />,
        errorElement: <ErrorPage />,
        loader: singleMovieLoader,
      },
      {
        path: '/tickets',
        element: <Ticket />,
        errorElement: <ErrorPage />,
        loader: ticketLoader,
      },
      {
        path: '/register',
        element: <Register />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router ={router}/>
}
export default App
