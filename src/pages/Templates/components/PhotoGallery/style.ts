import Styled from 'styled-components'

const Container = Styled.div`
  .row {
    height: 15vw; 
    margin: 0 auto;
    gap: 8px;
    margin-bottom: 8px;
  }

  img {
    height: 100%;
    object-fit: contain;
    cursor: pointer;
    border-radius: 8px;
  }
`

export default Container