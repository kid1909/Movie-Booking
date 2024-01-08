import styled from 'styled-components'

const Wrapper = styled.section`
  .ticket-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8); /* Adjust the transparency as needed */
    display: none;
    z-index: -1;
  }
  .ticket-container {
    margin-left: 20px;
    margin-right: 20px;
    z-index: 20;
  }
  .cancel-window {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    display: none; /* Initially hidden */
    z-index: 2; /* Set a higher z-index to ensure the cancel window is on top */
    background: white;
    color: black;
    display: flex;
  }
  .confirm-cancel {
    display: block;
  }
  .confirm-btn {
    display: flex;
    justify-content: center;
  }
  .cancel-btn {
    cursor: pointer;
  }

  .show-sidebar {
    display: block; /* Show overlay and cancel window when show-sidebar is active */
    opacity: 1;
    visibility: visible;
    z-index: 1; /* Adjust the z-index as needed */
  }
`

export default Wrapper
