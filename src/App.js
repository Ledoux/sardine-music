import React from 'react';
import { InstantSearch,
  Configure
} from 'react-instantsearch/dom';

import Header from './components/Header'
import withUrlSync from './hocs/withUrlSync'
const { ALGOLIA_APP_ID, ALGOLIA_API_KEY } = process.env

const App = ({ children, createURL, onSearchStateChange, searchState }) => {
  return (
    <div className="app">
      <InstantSearch
        appId={ALGOLIA_APP_ID}
        apiKey={ALGOLIA_API_KEY}
        indexName="songs"
        searchState={searchState}
        createURL={createURL}
        onSearchStateChange={onSearchStateChange}
      >
        <Configure hitsPerPage={10} />
        <Header />
        {children}
      </InstantSearch>
    </div>
  )
}

export default withUrlSync(App);
