import classnames from 'classnames'
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'

class Player extends Component {
  render () {
    const { extraClass, url } = this.props
    return (
      <div className={classnames('player col-6 mx-auto', {
        [extraClass]: extraClass
      })}>
        <ReactPlayer playing={url}
          width='100%'
          height='100%'
          url={url} />
      </div>
    )
  }
}

export default connect(
  state => ({ url: state.player.url })
)(Player)
