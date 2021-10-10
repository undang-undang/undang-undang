import React, { useState, useEffect, useMemo } from 'react'

import { soundOff, soundOn } from 'assets/icons'
import Container from './style'

interface Props {
  url?: string
}

const Music: React.FC<Props> = ({
  url = '/music/Beautiful_In_White-Shane_Filan.mp3'
}) => {
  const [audio] = useState(new Audio(url))
  const [play, setPlay] = useState(false)

  useEffect(() => {
    play ? audio.play() : audio.pause()
    audio.loop = true
  }, [play, audio])

  const onClickAudio = () => {
    setPlay(!play)
  }

  return (
    <Container>
      <img onClick={ onClickAudio } src={ play ? soundOn : soundOff } alt='' />
    </Container>
  )
}

export default Music