import Styled from 'styled-components';

const Container = Styled.div`
  border: 1px solid red;
  padding: 100px 0px;

  .couple-photo {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin: auto;
  }

  .container {
    text-align: center;
    margin: auto;
  }

  .couple-photo > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: pink;
  }
`;

export default Container;
