import React, { useState, useEffect, useCallback} from 'react'
import ScrollAnimation, { ScrollAnimationProps } from 'react-animate-on-scroll'

interface ScrollAnimProps {
}

const ScrollAnim: React.FC<ScrollAnimProps & ScrollAnimationProps> = ({
  children,
}) => {
  const [y, setY] = useState( window.scrollY )
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollDirection, setScrollDirection] = useState( 'down' )

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget
      if ( y > window.scrollY ) {
        setScrollDirection( 'up' )
      } else if ( y < window.scrollY ) {
        setScrollDirection( 'down' )
      }
      setY( window.scrollY )
    }, [y]
  )

  useEffect( () => {
    setY( window.scrollY )
    window.addEventListener( 'scroll', handleNavigation )

    return () => {
      window.removeEventListener( 'scroll', handleNavigation )
    }
  }, [handleNavigation] )

  return (
    <ScrollAnimation
      animateIn='animate__animated animate__fadeInUp'
      // animateIn={scrollDirection === 'down' ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeInDown'}
      animateOnce
    >
      { children }
    </ScrollAnimation>
  )
}

export default ScrollAnim