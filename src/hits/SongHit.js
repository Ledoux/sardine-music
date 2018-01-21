import classnames from 'classnames'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { assignPlayer } from '../reducers/player'

class SongHit extends Component {
  constructor () {
    super()
    this.state = {
      isSelected: false
    }
  }
  onClick = () => {
    const { assignPlayer, index } = this.props
    assignPlayer({ songIndex: index })
    this.setState({ isSelected: true })
  }
  render () {
    const { isSelected, name } = this.props
    return (
      <div className={classnames("song-hit p2 flex items-center", {
        "song-hit--active": isSelected
      })}>
        <button className={classnames("button button--alive mr2", {
            "song-hit__button--active": isSelected
          })}
          onClick={this.onClick} >
          >
        </button>
        <div className="h2 song-hit__name">
          {name}
        </div>
      </div>
    );
  }
};

export default connect(
  (state, ownProps) =>
    ({ isSelected: state.player.songIndex === ownProps.index }),
  { assignPlayer }
)(SongHit)
