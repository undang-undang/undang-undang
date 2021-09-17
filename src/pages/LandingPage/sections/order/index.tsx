import React, { useEffect } from 'react'
import Carousel, { ButtonGroupProps, DotProps } from 'react-multi-carousel'
import { useResizeDetector } from 'react-resize-detector'

import Hearts from 'pages/LandingPage/components/Hearts'
import { Whatsapp } from 'assets/svg'
import * as Icons from 'assets/icons'

import {
  orders,
  priceList
} from '../../wording'

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
    items: 1,
  }
}

const Order: React.FC = () => {
  let refSlider: Carousel | null = null;
  const { width, ref } = useResizeDetector()

  useEffect(() => {
    setTimeout(() => {
      refSlider && refSlider.goToSlide( 0 )
    }, 100)
  })


  const ButtonGroup = ( { next, previous, goToSlide }: ButtonGroupProps ) => {
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
  
  const renderSteps = () => {
    return orders.steps.map(order => (
      <div key={order.title} className='order-step'>
        <div className='icon'>
          <img src={order.icon} alt='' />
        </div>
        <h3>{order.title}</h3>
        <p>{order.desc}</p>
      </div>
    ))
  }
  
  const renderOrderSteps = () => {
    if (width && width < 465) {
      return (
        <div className='carousel-container'>
          <Carousel
            responsive={responsive}
            infinite
            swipeable
            draggable
            showDots
            customButtonGroup={<ButtonGroup />}
            customDot={<CustomDot />}
            arrows={false}
          >
            {renderSteps()}
          </Carousel>
        </div>
      )
    }

    return (
      <div className='grid'>
        {renderSteps()}
      </div>
    )
  }

  const renderList = () => {
    return priceList.map(price => (
      <div key={price.tier} className='carousel-items'>
        <div className='order-options'>
            { price.isBestDeal && <p className='best-deal'>Best Deal</p> }
            <div className='price'>
              <h3 className={price.type === 'Gold' ? 'gold' : ''}>{ price.type }</h3>
              <div className='f-center'>
                <p>{ price.price }</p>
                <h2>{ price.salePrice }</h2>
              </div>
              <button className={price.type}>
                <div className='whatsapp' >
                  <Whatsapp size={30} fill={price.type === 'Gold' ? '#fff' : undefined} />
                </div>
                Pesan Sekarang
              </button>
            </div>
            <div className='order-list'>
              { price.includeTier?.map( tier => <p key={tier}>Semua fitur <b>{tier}</b></p>) }
              { price.list.map(list => <p key={list}>{ list }</p>) }
            </div>
        </div>
      </div>
    ))
  }

  const renderPriceList = () => {
    if ( width && width < 1025 ) {
      return (
        <div className='carousel-container'>
          <Carousel
            ref={slider => refSlider = slider}
            responsive={responsive}
            infinite
            swipeable
            draggable
            showDots
            customButtonGroup={<ButtonGroup />}
            customDot={<CustomDot />}
            arrows={false}
            centerMode={!!(width && width > 464)}
          >
          {renderList()}
        </Carousel>
        </div>
      )
    }

    return (
      <div className='grid'>
        {renderList()}
      </div>
    )
  }

  return (
    <section ref={ref} className='order fc-center'>
      <div id='order-section' className='ph-1'>
        <h2>Langkah Memesan Undangan Digital</h2>
        <p>Tiga langkah mudah membuat undangan digital kamu</p>
      </div>

      { renderOrderSteps() }

      <Hearts />

      <div className='mb-4 ph-1'>
        <h2>HARGA UNDANGAN DIGITAL</h2>
        <p>Tersedia tiga pilihan paket undangan pernikahan digital untuk hari spesial Anda</p>
      </div>

      {renderPriceList()}

    </section>
  )
}

export default Order