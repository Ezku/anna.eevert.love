import React from 'react'
import Rsvp from './index/Rsvp'
import Contact from './index/Contact'

import rsvpHero from './index/rsvp-hero-color.jpg'

import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

export default () => (
  <div>
    <Header />
    <HeroSection id="rsvp" header="RSVP" hero={rsvpHero}>
      <Rsvp />
    </HeroSection>
    <Footer id="yhteystiedot" header="Yhteystiedot">
      <Contact />
    </Footer>
  </div>
)
