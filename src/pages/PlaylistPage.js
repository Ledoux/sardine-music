import React from 'react'
import { InstantSearch,
  Configure,
  RefinementList
} from 'react-instantsearch/dom';

import SongsList from '../components/SongsList'
import SearchBox from '../components/SearchBox'
import withUrlSync from '../hocs/withUrlSync'

const { ALGOLIA_APP_ID, ALGOLIA_API_KEY } = process.env

const PlaylistPage = ({ createURL, onSearchStateChange, searchState, slug }) => {
  return (
    <main className="page client-home-page">
      <div className='col-9 mx-auto'>
        <InstantSearch
          appId={ALGOLIA_APP_ID}
          apiKey={ALGOLIA_API_KEY}
          indexName="songs"
          searchState={searchState}
          createURL={createURL}
          onSearchStateChange={onSearchStateChange}
        >
          <Configure filters={`playlist_slugs:${slug}`}
            hitsPerPage={10}
          />
          <div className="col-6 mx-auto mt2 mb2">
            <SearchBox />
          </div>
          <SongsList />
        </InstantSearch>
      </div>
    </main>
  )
}

export default withUrlSync(PlaylistPage)
