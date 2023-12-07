import { pageNavLinks } from '../utils/links'
import { NavLink } from 'react-router-dom'


const PageNavLinks = () => {
  return (
  
      <div className="pageNavContainer">
        {pageNavLinks.map((item, index) => {
          const { text, path } = item
          return (
            <NavLink
              key={index}
              to={path}
              className="page-nav-link"
              // onClick={isBigSidebar ? null : toggleSidebar}
            >
              {/* <span className="icon">{icon}</span>
            <span className='text'>{text}</span> */}
              <button type="btn" className="page-nav-btn">
                <span className="page-nav-text">{text}</span>
              </button>
            </NavLink>
          )
        })}
      </div>
  
  )
}

export default PageNavLinks