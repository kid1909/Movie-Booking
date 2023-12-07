import styled from 'styled-components'

const Wrapper = styled.section`
  .carousel {
    overflow: hidden;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    /* height: 40vh; */

  }
  .inner {
    white-space: nowrap;
    transition: transform 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  .carousel-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .carousel-img {
    width: 100vw;
    padding: 0 20px 0 20px;
    /* height: 40vh; */
    object-fit: contain;
 
  }
  .carousel-buttons {
    display: flex;
    justify-content: space-evenly;
    /* background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    position: absolute;
    top: 75%;
    width: 100%; */
  }
  .button-arrow {
    background: none;
    border: none;
    cursor: pointer;
    color: white;
  }
  .indicators {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .indicator-buttons {
    border: none;
    cursor: pointer;
  }
  .indicators > button {
    margin: 5px;
    background: none;
    color: white;
  }
  .indicator-symbol {
    color: black;
  }
  .indicator-symbol-active {
    color: white;
  }
`

export default Wrapper
