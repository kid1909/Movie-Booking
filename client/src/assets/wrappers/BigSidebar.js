import styled from 'styled-components'

const Wrapper = styled.section`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: black;
    height: 100vh;
    min-width: 100vw;
    font-size: 2rem;
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
  }
  .nav-links {
    padding-top: 100px;
  }
  span {
    padding: 10px;
    border-bottom: 0.5pt solid var(--borderFadedColor);
    /* color: #34393f; */
  }
  span:hover {
    color: var(--hoverColor);
  }
  .close-btn {
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    padding-top: 20px;
    padding-left: 5px;
  }
  .close-btn:hover {
    color: var(--hoverColor);
  }
  .pageNavContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .page-nav-btn {
    background: none;
    border: none;
    font-size: 2rem;
  }
  .page-nav-text {
    color: white;
  }
`

export default Wrapper
