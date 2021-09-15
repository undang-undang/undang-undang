import React from 'react'
import Carousel, { ButtonGroupProps, DotProps } from 'react-multi-carousel'
import { useResizeDetector } from 'react-resize-detector'

import * as Icons from 'assets/icons'

import { reasons } from '../../wording'
import Waves from '../../components/Waves'
import Hearts from '../../components/Hearts'

import './style.css'

const responsive = {
  ipad: {
    breakpoint: { max: 1024, min: 768 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const WhyUs: React.FC = () => {
  const { width, ref } = useResizeDetector()

  const renderReasons = () => {
    return reasons.map( reason => (
      <div key={reason.title} className='reason fc-center'>
        <div className='icon'>
          <img src={reason.icon} alt='' />
        </div>
        <h3>{reason.title}</h3>
        <p>{reason.desc}</p>
      </div>
    ) )
  }

  const ButtonGroup = ( { next, previous }: ButtonGroupProps ) => {
    return (
      <div>
        <div className='custom-arrow arrow-left' onClick={() => previous && previous()}><img src={Icons.arrow} alt='prev' /></div>
        <div className='custom-arrow arrow-right' onClick={() => next && next()}><img src={Icons.arrow} alt='next' /></div>
      </div>
    )
  }

  const CustomDot = ( { onClick, ...rest }: DotProps ) => {
    const {
      active,
    } = rest
    return (
      <div
        className={`custom-dot ${active ? 'dot-active' : 'dot-inactive'}`}
        onClick={() => onClick && onClick()}
      />
    )
  }

  const renderContent = () => {
    if ( width && width < 1025) {
      return (
        <Carousel
          responsive={responsive}
          infinite
          swipeable
          draggable
          itemClass='carousel-item'
          showDots
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          customDot={<CustomDot />}
          centerMode={ width && width < 768 ? false : true }
        >
          {renderReasons()}
        </Carousel>
      )
    }

    return (
      <div className='grid'>
        {renderReasons()}
      </div>
    )
  }

  return (
    <section ref={ref} className='why-us'>
      <div className='inner-padding'>
        <p>
          Kamu sebentar lagi mau menikah?<br />
          Bingung cari jasa pembuatan undangan digital atau undangan online dengan harga murah dan kualitas premium?<br />
          <b>Yuk cobain jasa dari kami!</b>
        </p>

        <Hearts />

        <h2 className='mb-1'>Mengapa harus undang-undang.com?</h2>
      </div>

      { renderContent() }

      <Waves />
    </section>
  )
}

export default WhyUs