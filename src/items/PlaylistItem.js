import React, { Component } from 'react'

import Link from '../components/Link'

class PlaylistItem extends Component {
  render () {
    const { hit: { name, slug, thumbnailUrl } } = this.props
    return (
      <Link href={`/playlists/playlists_slugs:${slug}`}>
        <div className="playlist-item clearfix">
          <div className="sm-col sm-col-3">
            <img alt="cover"
              className="playlist-item__image"
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

export default PlaylistItem
