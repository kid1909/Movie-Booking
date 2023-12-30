import styled from 'styled-components'

const Wrapper = styled.section`
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    margin-left: 20px;
    grid-gap: 1rem;
    margin-right: 5px;
    cursor: pointer;
    padding-top: 30px;
  }
  .movie-poster {
    width: 100%;
  }
  .movie-poster:hover {
    border-bottom: 3px solid var(--hoverColor);
  }
  @media (min-width: 600px) {
    .container {
      grid-template-columns: 1fr 1fr 1fr;
      margin-right: 20px;
    }
  }
`

export default Wrapper
