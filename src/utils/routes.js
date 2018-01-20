import React from 'react'
import { Redirect } from 'react-router'

import ListPage from '../components/ListPage'
import ItemsComponentByIndexName from '../items'
// { filters: `playlist_slugs:${slug}` }

const routes = [
  {
    exact: true,
    path: '/',
    render: () => <Redirect to="/playlists" />
  },
  /*
  {
    exact: true,
    label: 'Artists',
    path: '/artists',
    render: () => <ArtistsPage />
  },
  */
  {
    exact: true,
    path: '/:indexName',
    render: ({ match: { params: { indexName } } }) =>
      <ListPage indexName={indexName}
        ItemComponent={ItemsComponentByIndexName[indexName]} />
  },
  /*
  {
    exact: true,
    label: 'Songs',
    path: '/songs',
    render: () => <SongsPage />
  },
  {
    exact: true,
    path: '/artists/:slug',
    render: ({ match: { params: { slug } } }) => <PlaylistPage slug={slug} />
  },
  {
    exact: true,
    path: '/playlists/:slug',
    render: ({ match: { params: { slug } } }) => <PlaylistPage slug={slug} />
  }
  */
]

export default routes
