import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connectHits } from 'react-instantsearch/connectors';

class Hit extends Component {
  render () {
    const { hits, HitComponent } = this.props
    return <HitComponent {...hits[0]} />
  }
}

Hit.propTypes = {
  HitComponent: PropTypes.func.isRequired
}

export default connectHits(Hit)
