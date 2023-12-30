import styled from 'styled-components'

const Wrapper = styled.section`
  * {
    /* text-transform: capitalize; */
  }

  .navbar {
    display: flex;
    justify-content: space-around; /* Adjust as needed */
    padding: 20px; /* Adjust padding as needed */
    /* text-transform: capitalize; */
  }
  img {
    width: 30px;
  }
  .small-menu {
    margin-top: 20px;
    margin-left: 20px;
  }
  .logo {
    width: 30px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  .small-menu {
    margin-left: 10px;
    font-size: 1.5rem;
  }
  .small-menu:hover {
    color: var(--hoverColor);
  }
  .nav-btn {
    color: var(--mainWhite);
    background: transparent;
    border: transparent;
    margin-left: 50px;
    font-size: 1.2rem;
    cursor: pointer;
  }
  .nav-btn:hover {
    color: var(--hoverColor);
  }
  span {
    display: block;
    font-size: 0.9em;
  }
  @media (min-width: 992px) {
    span {
      display: inline-flex;
      padding-left: 5px;
    }
    .nav-bar {
      display: flex;
      justify-content: space-between;
    }
    .logo {
      margin-top: 15px;
      height: 30px;
      justify-self: auto;
    }
    .material-symbols-outlined {
      margin-top: 15px;
      font-size: 30px;
      justify-self: auto;
    }
    .material-symbols-outlined:hover {
      color: var(--hoverColor);
    }
  }
`

export default Wrapper
