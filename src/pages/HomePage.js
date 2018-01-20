import React from 'react'
import { InstantSearch,
  Configure
} from 'react-instantsearch/dom';

import PlaylistsList from '../components/PlaylistsList'
import SearchBox from '../components/SearchBox'
import withUrlSync from '../hocs/withUrlSync'

const { ALGOLIA_APP_ID, ALGOLIA_API_KEY } = process.env

const HomePage = ({ createURL, onSearchStateChange, searchState }) => {
  return (
    <main className="page client-home-page">
      <div className='col-9 mx-auto'>
        <InstantSearch
          appId={ALGOLIA_APP_ID}
          apiKey={ALGOLIA_API_KEY}
          indexName="playlists"
          searchState={searchState}
          createURL={createURL}
          onSearchStateChange={onSearchStateChange}
        >
          <Configure hitsPerPage={10} />
          <div className="col-6 mx-auto mt2 mb2">
            <SearchBox />
          </div>
          <PlaylistsList />
        </InstantSearch>
      </div>
    </main>
  )
}

export default withUrlSync(HomePage)
