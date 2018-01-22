import classnames from 'classnames'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { assignPlayer } from '../reducers/player'
import algoliaClient from '../utils/algolia'

class SongHit extends Component {
  constructor () {
    super()
    this.state = {
      artist: null,
      isSelected: false
    }
  }
  onClick = () => {
    const { assignPlayer, index } = this.props
    assignPlayer({ songIndex: index })
    this.setState({ isSelected: true })
  }
  async componentWillMount () {
    if (window.location.pathname !== '/artists') {
      const result = await algoliaClient.initIndex('artists')
        .search({ filters: `slug:${this.props.artist_slug}` })
      const artist = result.hits[0]
      this.setState({ artist })
    }
  }
  render () {
    const { isSelected, name } = this.props
    const { artist } = this.state
    console.log('artist', artist)
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
          {name} {artist ? `(${artist.name})` : ''}
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
