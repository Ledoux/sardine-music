import React from 'react'

import Explore from '../components/Explore'
import PlaylistsList from '../components/PlaylistsList'

const SongsPage = () => {
  return (
    <main className="page">
      <Explore indexName='' ListComponent={PlaylistsList} />
    </main>
  )
}

export default SongsPage
