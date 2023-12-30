
import Logo from './Logo'
import Wrapper from '../assets/wrappers/Navbar'
import { MdMenu } from 'react-icons/md'
import Navlinks from './Navlinks'
import BigSidebar from './BigSidebar'
import Smallbar from './Smallbar'
import { useState, createContext, useContext } from 'react'
import { Link } from 'react-router-dom'

const NavbarContext = createContext()

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  return (
    <>
      <Wrapper>
        <NavbarContext.Provider value={{ toggleSidebar, showSidebar }}>
          <div className="nav-bar">
            <MdMenu className="small-menu" onClick={toggleSidebar} />
            <BigSidebar />
            <Link to="/">
              {' '}
              <Logo />
            </Link>

            <Navlinks />
          </div>
          <Smallbar />
        </NavbarContext.Provider>
      </Wrapper>
    </>
  )
}
export const useNavbarContext = () => useContext(NavbarContext)
export default Navbar
