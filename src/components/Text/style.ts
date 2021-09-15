import Styled from 'styled-components';

import { FontFamily } from './index';

interface StyledProps {
  fontFamily?: FontFamily
  fontSize?: string
}

export const H1 = Styled.h1<StyledProps>`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
`;

export const H2 = Styled.h2<StyledProps>`
  font-family: ${props => props.fontFamily};
  font-size: 1.5rem;
`;

export const H3 = Styled.h3<StyledProps>`
  font-family: ${props => props.fontFamily};
  font-size: 1.25rem;
`;

export const P = Styled.p<StyledProps>`
  font-family: ${props => props.fontFamily};
  font-size: 1rem;
`;