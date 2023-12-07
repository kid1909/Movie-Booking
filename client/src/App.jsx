import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Landing, About, Login, Register, HomeLayout, ErrorPage } from './Pages'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement:<ErrorPage />,
    children: [
      { index:true,       
        element: <Landing />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router ={router}/>
}
export default App
