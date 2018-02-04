import React from 'react'
import Rsvp from './index/Rsvp'
import Contact from './index/Contact'

import hero1 from './index/hero-8650.jpg'
import hero2 from './index/hero-8667.jpg'
import hero3 from './index/hero-8675.jpg'

import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

export default () => (
  <div>
    <Header />
    <HeroSection id="rsvp" header="RSVP" hero={hero3}>
      <Rsvp />
    </HeroSection>
    <HeroSection id="presents" header="Ennen juhlaa" hero={hero2}>
      <p>Lorem</p>
    </HeroSection>
    <HeroSection id="wedding" header="Juhla" hero={hero1}>
      <p>Lorem</p>
    </HeroSection>
    <Footer id="yhteystiedot" header="Yhteystiedot">
      <Contact />
    </Footer>
  </div>
)
