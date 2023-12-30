import styled from 'styled-components'

const Wrapper = styled.section`
  @media (min-width: 1024px) {
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8); /* Adjust the transparency as needed */
      /* display: none; */
      z-index: 30;
    }
    .container {
      display: flex;
      width: 250px;
      z-index: 50;
    }
  }
  /* .overlay {
    display: none;
  } */
  .container {
    position: fixed;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 20, 139, 1)
    );
    display: flex;
    flex-direction: column;

    /* align-items: center; */
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    background: white;
    color: black;
    height: 70vh;
    padding: 30px;

    /* justify-items: center; */
    font-size: 1.1rem;
  }
  input {
    padding: 10px;
    width: 100%;
    height: 60%;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .close-btn {
    /* top: 10px;
    right: 10px; */

    cursor: pointer;
  }
  .login-btn {
    margin-top: 30px;
    background: var(--buttonColor);
    border: none;
    color: white;
    font-size: 1.2rem;
    padding: 10px;
    width: 100%;
    cursor: pointer;
  }
  .line {
    /* padding: 10px; */
    /* margin-left: 20px;
    margin-right: 20px; */
    border-bottom: 0.5pt solid var(--borderFadedColor);
  }
`

export default Wrapper
