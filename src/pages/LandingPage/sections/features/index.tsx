import React from "react";
// import { useResizeDetector } from 'react-resize-detector';

import features from "./data";
import './style.css';

// const responsive = {
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

const Features: React.FC = () => {
  const renderFeatures = () => {
    return features.map( feature => (
      <div className='item' key={feature.title}>
        <div className='icon'>
          <img alt='' src={feature.icon} />
        </div>
        <div className='text'>
          <h2>{feature.title}</h2>
          <p>{feature.desc}</p>
        </div>
      </div>
    ) )
  }

  const renderContent = () => {
    // if ( width && width < 1025) {
    //   return (
    //     <Carousel
    //       responsive={responsive}
    //       infinite
    //       swipeable
    //       draggable
    //       centerMode
    //       showDots
    //     >
    //       {renderFeatures()}
    //     </Carousel>
    //   )
    // }

    return (
      <div className='grid'>
        {renderFeatures()}
      </div>
    )
  }
  return (
    <section className='features'>
      <h2>Fitur Undangan Online</h2>
      <p className='mb-1'>Fitur-fitur yang akan membuat undangan pernikahan digital kamu terlihat ekslusif.</p>
      
      {renderContent()}

      

      <div className='waves'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='waves-1'>
          <path fill="#e2e0de" fillOpacity="1" d="M0,128L60,144C120,160,240,192,360,176C480,160,600,96,720,85.3C840,75,960,117,1080,122.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='waves-3'><path fill="#fff" fillOpacity="1" d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,197.3C840,192,960,224,1080,213.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='waves-2'><path fill="#e2e0de" fillOpacity="1" d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,197.3C840,192,960,224,1080,213.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
    </section>
  )
}

export default Features;