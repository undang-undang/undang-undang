import Styled from 'styled-components'

const Container = Styled.div`
  position: fixed;
  display: flex;
  bottom: 1rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 16px;
  cursor: pointer;
  background: white;
  border-radius: 8px;
  border: 3px solid white;
  box-shadow: 2px 2px 6px #bebebe;


  img {
    margin: auto;
    width: 28px;
    height: 28px;
  }
`

export default Container