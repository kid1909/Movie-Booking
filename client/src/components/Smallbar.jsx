import Wrapper from '../assets/wrappers/Smallbar'
import PageNavLinks from './PageNavLinks'
import { useNavbarContext } from '../components/Navbar'

const Smallbar = () => {
  const { showSidebar, toggleSidebar } = useNavbarContext()
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <PageNavLinks />
      </div>
    </Wrapper>
  )
}
export default Smallbar
