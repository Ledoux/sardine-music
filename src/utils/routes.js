import React from 'react'
import { Redirect } from 'react-router'

import ArtistsPage from '../pages/ArtistsPage'
import PlaylistPage from '../pages/PlaylistPage'
import PlaylistsPage from '../pages/PlaylistsPage'
import SongsPage from '../pages/SongsPage'

const routes = [
  {
    exact: true,
    path: '/',
    render: () => <Redirect to="/playlists" />
  },
  {
    exact: true,
    label: 'Artists',
    path: '/artists',
    render: () => <ArtistsPage />
  },
  {
    exact: true,
    label: 'Playlists',
    path: '/playlists',
    render: () => <PlaylistsPage />
  },
  {
    exact: true,
    label: 'Songs',
    path: '/songs',
    render: () => <SongsPage />
  },
  {
    exact: true,
    path: '/playlists/:slug',
    render: ({ match: { params: { slug } } }) => <PlaylistPage slug={slug} />
  }
]

export default routes
