import Styled from 'styled-components';

interface Props {
  isEven: boolean
  isLast: boolean
}

const Container = Styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: ${props => props.isEven ? 'row' : 'row-reverse' };
  width: 50%;
  margin-left: ${props => props.isEven ? '51px' : 'auto'};
  margin-right: ${props => props.isEven ? '0px' : '51px'};
  margin-bottom: 40px;
  
  .story-container {
    flex: 1;
    padding: 8px 16px;
    border-radius: 8px;
    background: pink;
    text-align: ${props => props.isEven ? 'right' : 'left'};
    margin-left: ${props => props.isEven ? '0px' : '30px'};
    margin-right: ${props => props.isEven ? '30px' : '0px'};
  }

  .icon-container {
    width: 102px;
    height: 102px;
    border-radius: 100%;
    background: pink;

    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      object-fit: cover;
    }
  }

  ${props => !props.isLast && `
    ::after {
      content: '';
      position: absolute;
      width: 2px;
      height: calc(100% + 80px);
      background: pink;
      z-index: -1;
      ${props.isEven ? 'right: 51px' : 'left: 51px'};
    }
  `}

`;

export default Container;