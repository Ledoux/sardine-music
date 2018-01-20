import React from 'react'
import { Redirect } from 'react-router'

import Explore from '../components/Explore'
import ItemsComponentByIndexName from '../items'
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
        <Explore indexName={indexName}
          ItemComponent={ItemsComponentByIndexName[indexName]}
        />
      </main>
    )
  },
  {
    exact: true,
    path: '/:indexName/:filters',
    render: ({ match: { params: { filters, indexName } } }) => (
      <main className="page">
        <Explore configure={{ filters }}
          indexName='songs'
          ItemComponent={SongItem}
        />
      </main>
    )
  }
]

export default routes
