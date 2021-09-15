import React from 'react'
import Carousel from 'react-multi-carousel'
import { useResizeDetector } from 'react-resize-detector'

import Hearts from 'pages/LandingPage/components/Hearts'
import {
  orders
} from '../../wording'
import { Whatsapp } from 'assets/svg'

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
  const { width, ref } = useResizeDetector()
  
  const renderSteps = () => {
    return orders.steps.map(order => (
      <div key={order.title} className='order-step'>
        <div className='icon f-center'>
          <img src={order.icon} alt='' />
        </div>
        <h3>{order.title}</h3>
        <p>{order.desc}</p>
      </div>
    ))
  }
  
  const renderOrderSteps = () => {
    if (width && width < 1025) {
      return (
        <Carousel
          responsive={responsive}
          infinite
          swipeable
          draggable
          showDots
          arrows={false}
          centerMode
        >
          {renderSteps()}
        </Carousel>
      )
    }

    return (
      <div className='grid'>
        {renderSteps()}
      </div>
    )
  }

  return (
    <section ref={ref} className='order fc-center'>
      <div id='order-section'>
        <h2>Langkah Memesan Undangan Digital</h2>
        <p>Tiga langkah mudah membuat undangan digital kamu</p>
      </div>

      { renderOrderSteps() }

      <Hearts />

      <div className='mb-4'>
        <h2>PILIHAN PAKET HARGA UNDANGAN ONLINE</h2>
        <p>Tersedia tiga pilihan paket undangan pernikahan digital untuk hari spesial Anda</p>
      </div>

      <div className='f-center'>
        <div className='grid'>
          <div className='order-options'>
            <h3>Silver</h3>
            <div className='price'>
              <div className='f-center'>
                <p>Rp 200.000,-</p>
                <h2>Rp 149.000,-</h2>
              </div>
              <button>
                <div style={{ width: '50px'}}>
                  <Whatsapp size={30} />
                </div>
                Pesan Sekarang
              </button>
            </div>
            <div className='order-list'>
              <p>Unlimited nama tamu</p>
              <p>Informasi mempelai</p>
              <p>Informasi acara</p>
              <p>Informasi Prokes</p>
              <p>Gmaps lokasi</p>
              <p>Countdown Acara</p>
              <p>Love quotes</p>
              <p>Wedding Wishes</p>
              <p>Save the date</p>
              <p>Background Musik template</p>
              <p>Gallery foto (9 foto)</p>
              <p>Background cover (3 foto)</p>
              <p>Masa berlaku 2 bulan</p>
            </div>
          </div>
          <div className='order-options'>
            <div style={{ position: 'relative' }}>
              <p className='best-deal'>Best Deal</p>
              <div className='price'>
                <h3 className='gold'>Gold</h3>
                <div className='f-center'>
                  <p>Rp 350.000,-</p>
                  <h2>Rp 249.000,-</h2>
                </div>
                <button>
                  <div style={{ width: '50px'}}>
                    <Whatsapp size={30} fill='#fff' />
                  </div>
                  Pesan Sekarang
                </button>
              </div>
              <div className='order-list'>
                <p>Semua fitur <b>Silver</b></p>
                <p>Background Musik pilihan</p>
                <p>Gallery foto (15 foto)</p>
                <p>Background cover (6 foto)</p>
                <p>Display Video</p>
                <p>Love Story</p>
                <p>Angpao Online</p>
                <p>RSVP via whatsapp</p>
                <p>Masa berlaku 3 bulan</p>
              </div>
            </div>
          </div>
          <div className='order-options'>
            <div>
              <h3>Diamond</h3>
              <div className='price'>
                <div className='f-center'>
                  <p>Rp 500.000,-</p>
                  <h2>Rp 329.000,-</h2>
                </div>
                <button>
                  <div style={{ width: '50px'}}>
                    <Whatsapp size={30} />
                  </div>
                  Pesan Sekarang
                </button>
              </div>
              <div className='order-list'>
                <p>Semua Fitur <b>Silver</b></p>
                <p>Semua Fitur <b>Gold</b></p>
                <p>Background cover (9 foto)</p>
                <p>Gallery foto (Unlimited)</p>
                <p>Custom tema warna semua halaman</p>
                <p>Custom background pattern</p>
                <p>Masa berlaku 6 Bulan</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Order