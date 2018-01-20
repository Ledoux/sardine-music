import React, { Component } from 'react'

import Link from '../components/Link'

class ArtistItem extends Component {
  render () {
    const { hit: { name, slug, thumbnailUrl } } = this.props
    return (
      <div className="mb2">
        <div className="artist-item clearfix">
          <div className="col sm-col-3">
            <img alt="cover"
              className="artist-item__image"
              src={thumbnailUrl}
            />
          </div>
          <div className="col sm-col-9 p2">
            <Link href={`/artists/artist_slug:${slug}`}>
              {name}
            </Link>
          </div>
        </div>
        <div className="sep" />
      </div>
    );
  }
}

export default ArtistItem
