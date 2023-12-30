import styled from 'styled-components'

const Wrapper = styled.section`
  .confirm-container {
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
  .confirm-container.show {
    display: block;
  }
`

export default Wrapper
