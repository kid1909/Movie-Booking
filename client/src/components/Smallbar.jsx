import Wrapper from '../assets/wrappers/Smallbar'
import PageNavLinks from './PageNavLinks'
import { useLoadingContext } from '../Pages/Landing'

const Smallbar = () => {
      const { showSidebar, toggleSidebar } = useLoadingContext()
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
