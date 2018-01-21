import classnames from 'classnames'
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'

import { assignPlayer, getPlayerSong } from '../reducers/player'

class Player extends Component {
  onEnded = () => {
    const { assignPlayer, songIndex, songsLength } = this.props
    if (songIndex < songsLength - 1) {
      setTimeout(
        () => assignPlayer({ songIndex: songIndex + 1 }),
        2000
      )
    }
  }
  render () {
    const { extraClass, song } = this.props
    return (
      <div className={classnames('player col-6 mx-auto', {
        [extraClass]: extraClass
      })}>
        <ReactPlayer controls
          playing={song && typeof song.url === 'string'}
          width='100%'
          height='100%'
          onEnded={this.onEnded}
          url={song && song.url} />
      </div>
    )
  }
}

export default connect(
  state => ({
    song: getPlayerSong(state),
    songIndex: state.player.songIndex,
    songsLength: state.data.songs && state.data.songs.length
  }),
  { assignPlayer }
)(Player)
