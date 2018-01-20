import React, { Component } from 'react'

import Link from '../components/Link'

class ArtistItem extends Component {
  render () {
    const { hit: { name, slug, thumbnailUrl } } = this.props
    return (
      <Link href={`/artists/artist_slug:${slug}`}>
        <div className="artist-item clearfix">
          <div className="sm-col sm-col-3">
            <img alt="cover"
              className="artist-item__image"
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

export default ArtistItem
