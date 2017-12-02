import React from 'react'
import Rsvp from './index/Rsvp'
import Contact from './index/Contact'

import Header from '../components/Header'
import Content from '../components/Content'

export default () => (
  <div>
    <Header />
    <Content>
      <Rsvp id="rsvp" />
      <Contact id="yhteystiedot" />
    </Content>
  </div>
)
