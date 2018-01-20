import React from 'react'

import Explore from '../components/Explore'
import PlaylistsList from '../components/PlaylistsList'

const ArtistsPage = () => {
  return (
    <main className="page">
      <Explore ListComponent={PlaylistsList} />
    </main>
  )
}

export default ArtistsPage
