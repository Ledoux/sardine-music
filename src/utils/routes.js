import React from 'react'
import { Redirect } from 'react-router'

import Explore from '../components/Explore'
import Page from '../components/Page'
import Pick from '../components/Pick'
import Player from '../components/Player'
import SongHit from '../hits/SongHit'

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
      <Page>
        { indexName === 'songs' && <Player extraClass='mt3' /> }
        <Explore indexName={indexName} />
      </Page>
    )
  },
  {
    exact: true,
    path: '/:indexName/:slug',
    render: ({ match: { params: { indexName, slug } } }) => {
      return (
        <Page>
          <Pick configure={{ filters: `slug:${slug}` }}
            indexName={indexName} />
          <Player />
          <Explore configure={{ filters: indexName === 'artists'
              ? `artist_slug:${slug}`
              : `playlists_slugs:${slug}`
            }}
            indexName='songs'
            HitComponent={SongHit}
          />
        </Page>
      )
    }
  }
]

export default routes
