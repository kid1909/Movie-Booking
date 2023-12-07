import Wrapper from "../assets/wrappers/Landing"
import {Navbar,BigSidebar,Smallbar} from "../components"
import { useState, createContext, useContext } from 'react'
import Carousel from "../components/Carousel"

const LoadingContext = createContext()

const Landing = () => {

    const [showSidebar, setShowSidebar] = useState(false)
      const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
      }
  return (
    <LoadingContext.Provider value={{ toggleSidebar ,showSidebar}}>
      <Wrapper>
        <Navbar />    
      </Wrapper>
      <Carousel/>
    </LoadingContext.Provider>
  )
}

export const useLoadingContext = ()=> useContext(LoadingContext)
export default Landing