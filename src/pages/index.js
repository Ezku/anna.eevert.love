import React from 'react'

import Rsvp from './index/Rsvp'
import Before from './index/Before'
import Wedding from './index/Wedding'
import Contact from './index/Contact'

import hero1 from './index/hero-8650.jpg'
import hero2 from './index/hero-8667.jpg'
import hero3 from './index/hero-8675.jpg'

import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

export default () => (
  <div>
    <Header>
      {({ Nav, Link }) => (
        <Nav>
          <Link to="#rsvp">RSVP</Link>
          <Link to="#ennen">Ennen</Link>
          <Link to="#juhla">Hääjuhla</Link>
          <Link to="#yhteystiedot">Yhteystiedot</Link>
        </Nav>
      )}
    </Header>
    <HeroSection id="rsvp" header="RSVP" hero={hero3}>
      <Rsvp />
    </HeroSection>
    <HeroSection id="ennen" header="Ennen" hero={hero2}>
      <Before />
    </HeroSection>
    <HeroSection id="juhla" header="Hääjuhla" hero={hero1}>
      <Wedding />
    </HeroSection>
    <Footer id="yhteystiedot" header="Yhteystiedot">
      <Contact />
    </Footer>
  </div>
)
