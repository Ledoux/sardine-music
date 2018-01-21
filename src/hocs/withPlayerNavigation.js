import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'

import { assignPlayer } from '../reducers/player'

const withPlayerNavigation = WrappedComponent => {
  class _withPlayerNavigation extends Component {
    componentWillMount () {
      const { assignPlayer, history } = this.props
      history.listen(
        location => {
          assignPlayer({ songIndex: null })
        }
      )
    }
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
  return compose(
    withRouter,
    connect(null, { assignPlayer })
  )(_withPlayerNavigation)
}

export default withPlayerNavigation
