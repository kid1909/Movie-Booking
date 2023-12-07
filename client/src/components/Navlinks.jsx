import links from '../utils/links'
import { NavLink } from 'react-router-dom'

const Navlinks = () => {
  return (
    <div className='navbar'>
      {links.map((link, index) => {
        const { text, path, icon } = link
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            // onClick={isBigSidebar ? null : toggleSidebar}
          >
            {/* <span className="icon">{icon}</span>
            <span className='text'>{text}</span> */}
            <button type="btn" className="nav-btn">
              {icon}
              <span>{text}</span>
            </button>
          </NavLink>
        )
      })}
    </div>
  )
}
export default Navlinks
