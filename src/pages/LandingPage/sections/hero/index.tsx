import React from "react";

import Waves from '../../components/Waves';
import './style.css';

const Hero: React.FC = () => {
  const onClickOrderNow = () => {
    document.getElementById('order-section')?.scrollIntoView({
      block: 'start',
    })
  }

  return (
    <section className='hero'>
      <div className='inner fc-center'>
        <h1>Undang - Undang</h1>
        <p>Bikin undangan pernikahan digital jadi mudah</p>
        <button onClick={ onClickOrderNow }>Pesan Sekarang</button>
      </div>
      
      <Waves shadow />
    </section>
  )
}

export default Hero;