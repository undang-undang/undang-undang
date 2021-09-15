import React, { lazy } from 'react'

import './style.css'

const Header = lazy( () => import( './sections/Header' ))
const Hero = lazy( () => import( './sections/Hero' ))
const WhyUs = lazy( () => import( './sections/WhyUs' ))
const Features = lazy( () => import( './sections/Features' ))
const Order = lazy( () => import( './sections/Order' ))
const Footer = lazy( () => import( './sections/Footer' ))


const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <WhyUs />
      <Features />
      {/* <Catalog /> */}
      <Order />
      <Footer />
    </div>
  )
}

export default LandingPage