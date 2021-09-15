import React from 'react';

import Hearts from 'pages/LandingPage/components/Hearts';
import './style.css'

const Footer:React.FC = () => {
  return (
    <footer>
      <p>Anda sudah tidak sabar lagi untuk memesan undangannya kan?</p>
      <h1>Segera hubungi kami untuk pemesanan</h1>
      <Hearts />
      <p className='about-us'>
        Undang-Undang merupakan jasa penyedia layanan pembuatan undangan pernikahan digital atau undangan pernikahan online yang berbentuk undangan website.<br />
        Sistem order mudah dan cepat, didukung dengan team yang berpengalaman.
      </p>
    </footer>
  )
}

export default Footer;