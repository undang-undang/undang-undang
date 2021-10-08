import React from 'react';

import Hearts from 'pages/LandingPage/components/Hearts';
import './style.css'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='content'>
        <Hearts />
        <p className='about-us'>
          Undang-Undang merupakan jasa penyedia layanan pembuatan undangan pernikahan digital atau undangan pernikahan online yang berbentuk undangan website.<br />
          Sistem order mudah dan cepat, didukung dengan team yang berpengalaman.
        </p>
      </div>
      <div className='made-by'>
        <p>Made with love by:</p>
      </div>
    </footer>
  )
}

export default Footer;