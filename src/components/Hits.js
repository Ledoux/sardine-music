import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connectHits } from 'react-instantsearch/connectors';

import Item from './Item'

class Hits extends Component {
  render () {
    const { hits, HitComponent, WrapperComponent } = this.props
    return hits.map((hit, index) => (
      <WrapperComponent key={index}>
        <HitComponent {...hit} />
      </WrapperComponent>
    ))
  }
}

Hits.defaultProps = {
  WrapperComponent: Item
}

Hits.propTypes = {
  HitComponent: PropTypes.func.isRequired
}

export default connectHits(Hits)
