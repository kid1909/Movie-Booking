
import Logo from './Logo'
import Wrapper from '../assets/wrappers/Navbar'
import { MdMenu } from 'react-icons/md'
import Navlinks from './Navlinks'
import BigSidebar from './BigSidebar'
import { useLoadingContext } from '../Pages/Landing'
import Smallbar from './Smallbar'

const Navbar = () => {
const { showSidebar, toggleSidebar } = useLoadingContext()
  return (
    <>
      <Wrapper>
        <div className="nav-bar">
          {/* {showSidebar ? (
            <MdMenu className="small-menu" onClick={toggleSidebar} />
          ) : (
            <span className="material-symbols-outlined" onClick={toggleSidebar}>
              close
            </span>
          )} */}
          <MdMenu className="small-menu" onClick={toggleSidebar} />
          <BigSidebar />

          <Logo />
          <Navlinks />
        </div>
        <Smallbar />
      </Wrapper>
    </>
  )
}
export default Navbar
