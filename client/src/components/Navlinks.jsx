import links from '../utils/links'
import { NavLink } from 'react-router-dom'
import { useState, createContext, useContext } from 'react'
import NavlinkComponent from './NavlinkComponent'
import { useHomeLayoutContext } from '../Pages/HomeLayout'

const NavLinksContext = createContext()

const Navlinks = () => {
  const { user } = useHomeLayoutContext()
  // console.log(user)
  const [showSidebar, setShowSidebar] = useState(false)
  const [sideBarName, setSideBarName] = useState('')
  const toggleSidebar = (text) => {
    setShowSidebar(!showSidebar)   
    setSideBarName(text)
  }
  return (
    <NavLinksContext.Provider
      value={{ toggleSidebar, sideBarName, showSidebar }}
    >
      <div className="navbar">
        {links.map((link, index) => {
          const { text, path, icon, toggleBar } = link
          return (
            <NavLink
              key={text}
              className="nav-link"
              onClick={() => toggleSidebar(text)}
            >
              <button type="btn" className="nav-btn">
                {icon}
                <span>{text}</span>
              </button>
            </NavLink>
          )
        })}
        <NavlinkComponent sideBarName={sideBarName} />
      </div>
    </NavLinksContext.Provider>
  )
}

export const useNavLinksContext = () => useContext(NavLinksContext)
export default Navlinks
