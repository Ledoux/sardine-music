import React, { Component } from 'react'
import { connect } from 'react-redux'

import { assignPlayer } from '../reducers/player'

class SongItem extends Component {
  onClick = () => {
    const { assignPlayer, hit: { url } } = this.props
    assignPlayer({ url })
  }
  render () {
    const { hit: { name } } = this.props
    return (
      <div className="song-item p2 flex items-center">
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

export default connect(null, { assignPlayer })(SongItem)
