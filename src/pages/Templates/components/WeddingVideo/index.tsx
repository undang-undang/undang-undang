import React from 'react'
import YouTube from 'react-youtube';

import Container from './style'

interface Props {
  videoId: string
}

const WeddingVideo: React.FC<Props> = ({
  videoId
}) => {
  return (
    <Container className='flex-col'>
      <h2>Video</h2>
      <div className='youtube'>
        <YouTube videoId={ videoId } />
      </div>
    </Container>
  )
}

export default WeddingVideo;