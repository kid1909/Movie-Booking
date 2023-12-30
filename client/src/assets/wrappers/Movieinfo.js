import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 50px;
  .movie-title {
    font-size: 3rem;
  }
  .movie-poster {
    /* width: 200px; */
    width: 30%;
    object-fit: contain;
  }
  .info-group {
    display: flex;
    /* margin-left: 30px; */
    /* flex-direction: row; */
    flex-direction: row;
  }
  span {
    margin-top: 30px;
    display: block;
    flex-wrap: wrap;
    text-transform: uppercase;
  }
  .ticket-btn {
    display: inline;
    width: 200px;
    background: var(--buttonColor);
    border: none;
    height: 30px;
    border-radius: 5px;
    color: var(--mainWhite);
    font-weight: 300;
    font-size: 1rem;
    cursor: pointer;
  }
  .close-btn {
    cursor: pointer;
  }
  .movie-info-group {
    margin-left: 30px;
  }
  .seat-info {
    position: fixed;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 20, 139, 1)
    );
    padding: 20px;
    overflow-y: auto;
    display: none;
  }
  .seat-info.show {
    display: block;
  }
  .seat-container {
    display: inline-flex;
  }
  .seat-label {
  }
  .seat-btn {
    margin-left: 5px;
    cursor: pointer;
    margin-left: 10px;
  }
  .seat-btn.available {
  }
  .seat-btn.taken {
    background: black;
  }
  .submit-ticket-btn {
    margin-top: 30px;
  }
  .seat-selection {
    display: flex;
    margin-left: 5px;
  }
`

export default Wrapper
