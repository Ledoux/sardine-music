import classnames from 'classnames'
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'

import { assignPlayer, getPlayerSong } from '../reducers/player'

class Player extends Component {
  constructor () {
    super()
    this.state = { bufferSong: null }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.song && this.state.bufferSong &&
      nextProps.song.url !== this.state.bufferSong.url) {
      this.setState({ bufferSong: nextProps.song })
    }
  }
  onEnded = () => {
    const { assignPlayer, songIndex, songsLength } = this.props
    if (songIndex < songsLength - 1) {
      setTimeout(
        () => assignPlayer({ songIndex: songIndex + 1 }),
        2000
      )
    } else {
      // here we would need to find another playlist...
    }
    this.setState({ bufferSong: null })
  }
  onPlay = () => {
    this.setState({ bufferSong: this.props.song })
  }
  render () {
    const { extraClass, song } = this.props
    const { bufferSong } = this.state
    const playerSong = bufferSong || song
    const thumbnailUrl = (playerSong && playerSong.thumbnailUrl) ||
      '/images/player.png'
    const url = playerSong && playerSong.url
    return (
      <div className={classnames('player sm-col-6 mx-auto', {
        [extraClass]: extraClass
      })} style={{
        backgroundImage: `url('${thumbnailUrl}')`,
        backgroundSize: '100%'
      }} >
        <ReactPlayer controls
          playing={typeof url === 'string'}
          width='100%'
          height='100%'
          onEnded={this.onEnded}
          onPlay={this.onPlay}
          url={url} />
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
