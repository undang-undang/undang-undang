import React from 'react';

import {H1, H2, H3, P} from './style';

const Text: React.FC<TextProps> = ({
  children,
  text,
  className,
  type,
  fontFamily,
  fontSize,
}) => {
  const styledProps = {
    fontFamily,
    fontSize,
  }

  switch ( type ) {
    case 'h1': return <H1 {...styledProps} className={className}>{text || children}</H1>;
    case 'h2': return <H2 {...styledProps} className={className}>{text || children}</H2>;
    case 'h3': return <H3 {...styledProps} className={className}>{text || children}</H3>;
    default: return <P {...styledProps} className={className}>{text || children}</P>
  }
}

type TextType = 'h1' | 'h2' | 'h3' | 'p'
export type FontFamily = 'Mr De Haviland' | 'Poppins'

interface TextProps {
  text?: string
  className?: string
  type?: TextType
  fontFamily?: FontFamily
  fontSize?: string
}

export default Text;