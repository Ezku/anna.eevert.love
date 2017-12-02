import React from 'react'
import Rsvp from './index/Rsvp'
import Contact from './index/Contact'

import Header from '../components/Header'

export default () => (
  <div>
    <Header />
    <Rsvp id="rsvp" />
    <Contact id="yhteystiedot" />
  </div>
)
