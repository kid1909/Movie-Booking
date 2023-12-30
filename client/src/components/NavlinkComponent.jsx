import { useNavLinksContext } from './Navlinks'
// import Wrapper from '../assets/wrappers/NavlinkComponent'
// import Login from './Login'
// import { useHomeLayoutContext } from '../Pages/HomeLayout'
import { Login, Search, Theaters, Ticket } from '../components'

const NavlinkComponent = () => {
  const { toggleSidebar, sideBarName, showSidebar } = useNavLinksContext()
  // console.log(sideBarName)
  // const toggleSidebarRef = useRef(toggleSidebar)
  return (
    <div>
      {sideBarName === 'account' && <Login />}
      {sideBarName === 'search' && <Search />}
      {sideBarName === 'theaters' && <Theaters />}
      {sideBarName === 'ticket' && <Ticket />}
      {/* {(!sideBarName || sideBarName === '') && <div />} */}
    </div>
  )
}

export default NavlinkComponent
