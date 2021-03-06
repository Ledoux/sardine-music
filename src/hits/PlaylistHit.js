import React, { Component } from 'react'

import Link from '../components/Link'

class PlaylistHit extends Component {
  render () {
    const { name, slug, thumbnailUrl } = this.props
    return (
      <Link href={`/playlists/${slug}`}>
        <div className="playlist-hit clearfix">
          <div className="sm-col sm-col-3 center">
            <img alt="cover"
              className="playlist-hit__image"
              src={thumbnailUrl}
            />
          </div>
          <div className="h2 sm-col sm-col-9 p2 center">
            {name}
          </div>
        </div>
      </Link>
    );
  }
}

export default PlaylistHit
