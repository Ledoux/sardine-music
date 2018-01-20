import React from 'react'

import Explore from '../components/Explore'
import SongItem from '../components/SongItem'

const PlaylistPage = ({ slug }) => {
  return (
    <main className="page">
      <Explore configure={{ filters: `playlist_slugs:${slug}` }}
        indexName="songs"
        ItemComponent={SongItem}
      />
    </main>
  )
}

export default PlaylistPage
