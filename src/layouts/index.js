import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Content from '../components/Content'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="anna.eevert.love" />
    <Header />
    <Content>{children()}</Content>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
