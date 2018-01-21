import React, { Component } from 'react'
import { connect } from 'react-redux'

import { assignPlayer } from '../reducers/player'

class SongHit extends Component {
  onClick = () => {
    const { assignPlayer, index } = this.props
    assignPlayer({ songIndex: index })
  }
  render () {
    const { name } = this.props
    return (
      <div className="song-hit p2 flex items-center">
        <button className="button button--alive mr2" onClick={this.onClick}>
          >
        </button>
        <div className="h2">
          {name}
        </div>
      </div>
    );
  }
};

export default connect(null, { assignPlayer })(SongHit)
