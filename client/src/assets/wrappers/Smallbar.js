import styled from 'styled-components'

const Wrapper = styled.section`
  display: none;

  @media (min-width: 992px) {
    display: inline-block;
    .sidebar-container {
      z-index: -1;
      opacity: 0;
      width: 100vw;
      height: 40px;
      visibility: hidden;
      position: absolute;
      background: black;
      padding-left: 20px;
      padding-right: 20px;
    }
    .show-sidebar {
      z-index: 10;
      opacity: 1;
      visibility: visible;
    }

    .pageNavContainer {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid var(--borderFadedColor);
    }
    .page-nav-btn {
      background: none;
      border: none;
      font-size: 1rem;
    }
    .page-nav-btn:hover {
      cursor: pointer;
    }
    .page-nav-text {
      color: white;
    }
    .page-nav-text:hover {
      color: var(--hoverColor);
    }
  }
`

export default Wrapper
