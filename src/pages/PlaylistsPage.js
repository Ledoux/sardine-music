import React from 'react'

import Explore from '../components/Explore'
import PlaylistItem from '../components/PlaylistItem'

const PlaylistsPage = () => {
  return (
    <main className="page">
      <Explore indexName='playlists' ItemComponent={PlaylistItem} />
    </main>
  )
}

export default PlaylistsPage
