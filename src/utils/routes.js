import React from 'react'
import { Redirect } from 'react-router'

import Explore from '../components/Explore'
import Pick from '../components/Pick'
import Player from '../components/Player'
import SongItem from '../items/SongItem'

const routes = [
  {
    exact: true,
    path: '/',
    render: () => <Redirect to="/playlists" />
  },
  {
    exact: true,
    path: '/:indexName',
    render: ({ match: { params: { indexName } } }) => (
      <main className="page">
        { indexName === 'songs' && <Player extraClass='mt3' /> }
        <Explore indexName={indexName} />
      </main>
    )
  },
  {
    exact: true,
    path: '/:indexName/:filters',
    render: ({ match: { params: { filters, indexName } } }) => (
      <main className="page">
        <Pick configure={{ filters: `slug:${filters.split(':').slice(1).join(':')}` }}
          indexName={indexName} />
        <Player />
        <Explore configure={{ filters }}
          indexName='songs'
          ItemComponent={SongItem}
        />
      </main>
    )
  }
]

export default routes
