import { Outlet, redirect, useLoaderData } from 'react-router-dom'
import { Navbar } from '../components'
import customFetch from '../utils/customFetch'
import { useContext, createContext } from 'react'
import { toast } from 'react-toastify'


export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user')
    const user = data.userWithoutPassword
    // console.log(user)
    return user
  } catch (error) {
    console.log(error)
    const user = {}
    return user
  }
  // return console.log('homelayout loader')
}

const logoutUser = async () => {
  await customFetch.get('/auth/logout')
  toast.success('logout successfully')
}

const HomeLayoutContext = createContext()

const HomeLayout = () => {
  // const test = 'test from HomeLayout'
  const user = useLoaderData()
  // console.log(user.name)
  // console.log(test)
  // const id = user._id
  // console.log(id)
  return (
    // <HomeLayoutContext.Provider>
    <HomeLayoutContext.Provider value={{ user, logoutUser }}>
      <Navbar />

      {/* <Outlet /> */}
      <Outlet context={{ user }} />
    </HomeLayoutContext.Provider>
  )
}
export const useHomeLayoutContext = () => useContext(HomeLayoutContext)
export default HomeLayout
