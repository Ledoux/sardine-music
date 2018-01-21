import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { connectHits } from 'react-instantsearch/connectors';
import { compose } from 'redux'

import Item from './Item'
import { assignData } from '../reducers/data'

class Hits extends Component {
  componentWillMount () {
    this.onHitsChange(this.props)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.hits !== this.props.hits) {
      this.onHitsChange(nextProps)
    }
  }
  onHitsChange = props => {
    const { assignData, indexName, hits, onHitsChange, storeKey } = props
    assignData({ [storeKey || indexName]: hits })
    onHitsChange && onHitsChange(props)
  }
  render () {
    const { hits, HitComponent, WrapperComponent } = this.props
    return hits.map((hit, index) => (
      <WrapperComponent key={index}>
        <HitComponent {...hit} index={index} />
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

export default compose(
  connectHits,
  connect(null, { assignData })
)(Hits)
