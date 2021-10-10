import React from 'react'
import Gallery from 'react-photo-gallery'

import Container from './style';

const PhotoGallery: React.FC = () => {
  const photos = [
    'https://source.unsplash.com/random/?wedding/1',
    'https://source.unsplash.com/random/?wedding/2',
    'https://source.unsplash.com/random/?wedding/3',
    'https://source.unsplash.com/random/?wedding/4',
    'https://source.unsplash.com/random/?wedding/5',
    'https://source.unsplash.com/random/?wedding/6',
    'https://source.unsplash.com/random/?wedding/7',
    'https://source.unsplash.com/random/?wedding/8',
    'https://source.unsplash.com/random/?wedding/9',
    'https://source.unsplash.com/random/?wedding/10',
    'https://source.unsplash.com/random/?wedding/11',
    'https://source.unsplash.com/random/?wedding/12',
  ];

  return (
    <Container>
      <div className='flex'>
        <div className='flex row'>
          <img src='https://source.unsplash.com/random/?wedding/1' alt='' />
          <img src='https://source.unsplash.com/random/?wedding/2' alt='' />
          <img src='https://source.unsplash.com/random/?wedding/3' alt='' />
          <img src='https://source.unsplash.com/random/?wedding/4' alt='' />
        </div>
      </div>

      <div className='flex'>
        <div className='flex row'>
          <img src='https://source.unsplash.com/random/?wedding/5' alt='' />
          <img src='https://source.unsplash.com/random/?wedding/6' alt='' />
          <img src='https://source.unsplash.com/random/?wedding/7' alt='' />
          <img src='https://source.unsplash.com/random/?wedding/8' alt='' />
        </div>
      </div>

      <div className='flex'>
        <div className='flex row'>
          <img src='https://source.unsplash.com/random/?wedding/9' alt='' />
          <img src='https://source.unsplash.com/random/?wedding/10' alt='' />
          <img src='https://source.unsplash.com/random/?wedding/11' alt='' />
          <img src='https://source.unsplash.com/random/?wedding/12' alt='' />
        </div>
      </div>
    </Container>
  );
}

export default PhotoGallery