import React, { useEffect, useState } from 'react'
import { useResizeDetector } from 'react-resize-detector'

import { features } from '../../wording'
import Waves from '../../components/Waves'

import './style.css'

const Features: React.FC = () => {
  const { width, ref } = useResizeDetector();
  const [viewMore, setViewMore] = useState(false)

  useEffect(() => {
    setViewMore( !!( width && width > 765))
  }, [width])

  const renderFeatures = () => {

    let renderData = [...features]
    if (!viewMore) renderData = [...features].splice(0, 4)

    return renderData.map(feature => {
      return (
        <div className='item' key={feature.title}>
          <div className='icon'>
            <img alt='' src={feature.icon} />
          </div>
          <div className='text'>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        </div>
      )
    } )
  }

  const onClickViewMore = () => {
    setViewMore(!viewMore)

    document.getElementById('see-all')?.scrollIntoView()
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

      <div className='view-all'  onClick={onClickViewMore}>
        {
          viewMore ? 'Tutup Sebagian' : 'Lihat Semua'
        }
      </div>

      <Waves color='#ebebeb' />
    </section>
  )
}

export default Features;