import React, { Component } from 'react'

import Link from '../components/Link'

class PlaylistHit extends Component {
  render () {
    const { name, slug, thumbnailUrl } = this.props
    return (
      <Link href={`/playlists/playlists_slugs:${slug}`}>
        <div className="playlist-hit clearfix">
          <div className="sm-col sm-col-3">
            <img alt="cover"
              className="playlist-hit__image"
              src={thumbnailUrl}
            />
          </div>
          <div className="h2 sm-col sm-col-9 p2">
            {name}
          </div>
        </div>
      </Link>
    );
  }
}

export default PlaylistHit
