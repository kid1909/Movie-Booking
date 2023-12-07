import { useLoadingContext } from '../Pages/Landing'
import Wrapper from '../assets/wrappers/BigSidebar'
// import { navLinks } from '../utils/links'
// import { NavLink } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import PageNavLinks from './PageNavLinks'

const BigSidebar = () => {
    const { showSidebar, toggleSidebar } = useLoadingContext()
    return (

      <Wrapper>
        <div
          className={
            showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
          }
        >
                {/* <div
          className='sidebar-container show-sidebar'
        > */}
          <div className="content">
            <button type="button" className="close-btn" onClick={toggleSidebar}>
              <FaTimes />
            </button>
            <div className="nav-links">
          <PageNavLinks/>
     
            </div>
          </div>
        </div>
      </Wrapper>
    )
}
export default BigSidebar
