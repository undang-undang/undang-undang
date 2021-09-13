import React from "react";

import Features from './sections/features';
import Hero from './sections/hero';
import WhyUs from './sections/whyUs';
// import Catalog from './sections/catalog';
// import Order from './sections/order';
import './style.css';

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* <header>
        <ul>
          <li>Fitur</li>
          <li>Katalog</li>
        </ul>
      </header>
      <div className='header-layer' /> */}

      <Hero />
      <WhyUs />
      <Features />
      {/* <Catalog />
      <Order /> */}


      {/* <footer>
        Undang-Undang merupakan jasa penyedia layanan pembuatan undangan pernikahan digital atau undangan pernikahan online yang berbentuk undangan website.<br />
        Sistem order mudah dan cepat, didukung dengan team yang berpengalaman.
        <h2>Anda sudah tidak sabar lagi untuk memesan undangannya kan?</h2>
        <h1>Segera hubungi kami untuk pemesanan</h1>
      </footer> */}
    </div>
  )
}

export default LandingPage;