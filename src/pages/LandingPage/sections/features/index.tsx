import React, { useEffect, useState } from 'react'
import { useResizeDetector } from 'react-resize-detector'

import { ScrollAnimation } from 'components'

import { features } from '../../wording'
import Waves from '../../components/Waves'

import './style.css'

const Features: React.FC = () => {
  const { width, ref } = useResizeDetector();
  const [viewMore, setViewMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    width && width < 769 && setIsMobile(true)
  }, [width])

  const renderFeatures = () => {

    let renderData = [...features]
    if ( !viewMore && isMobile) renderData = [...features].splice(0, 4)

    return renderData.map(feature => {
      return (
        <ScrollAnimation
          key={feature.title}
        >
          <div className='item'>
            <div className='icon'>
              <img alt='' src={feature.icon} />
            </div>
            <div className='text'>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          </div>
        </ScrollAnimation>
      )
    } )
  }

  const onClickViewMore = () => {
    setViewMore(!viewMore)

    if ( viewMore ) document.getElementById('see-all')?.scrollIntoView()
    else window.scrollBy( 0, 200 )
  }

  return (
    <section ref={ref} className='features'>
      <div className='ph-1'>
        <h2 id='see-all' >Fitur Undangan Online</h2>
        <p className='mb-1'>Fitur-fitur yang akan membuat undangan pernikahan digital kamu terlihat ekslusif.</p>
      </div>
      
      <div className='grid'>
        {renderFeatures()}
      </div>

      {
       isMobile &&
        <div className='view-all'  onClick={onClickViewMore}>
          { viewMore ? 'Tutup Sebagian' : 'Lihat Semua' }
        </div>
      }


      <Waves color='#ebebeb' />
    </section>
  )
}

export default Features;