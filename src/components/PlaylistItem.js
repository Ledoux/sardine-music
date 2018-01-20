import React, { Component } from 'react'

import Link from './Link'

class PlaylistItem extends Component {
  render () {
    const { hit: { name, slug } } = this.props
    return (
      <div className="playlist-item">
        <Link href={`/playlist/${slug}`}>
          {name}
        </Link>
        <div className="sep" />
      </div>
    );
  }
}

export default PlaylistItem
