import React from 'react'
import Rsvp from './index/Rsvp'
import Contact from './index/Contact'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => (
  <div>
    <Header />
    <Rsvp />
    <Footer id="yhteystiedot" header="Yhteystiedot">
      <Contact />
    </Footer>
  </div>
)
