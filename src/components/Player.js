import classnames from 'classnames'
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'

import { getPlayerUrl } from '../reducers/player'

class Player extends Component {
  render () {
    const { extraClass, url } = this.props
    console.log('url', url)
    return (
      <div className={classnames('player col-6 mx-auto', {
        [extraClass]: extraClass
      })}>
        <ReactPlayer playing={typeof url === 'string'}
          width='100%'
          height='100%'
          url={url} />
      </div>
    )
  }
}

export default connect(
  state => ({ url: getPlayerUrl(state) })
)(Player)
