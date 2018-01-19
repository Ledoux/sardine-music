import React from 'react';
import 'react-instantsearch-theme-algolia/style.scss';
import { InstantSearch,
  Configure
} from 'react-instantsearch/dom';

import Header from './components/Header'
import withUrlSync from './hocs/withUrlSync'
import { APP_ID, API_KEY } from './utils/config'

const App = props => {
  return (
    <div className="app">
      <InstantSearch
        appId={APP_ID}
        apiKey={API_KEY}
        indexName="songs"
        searchState={props.searchState}
        createURL={props.createURL}
        onSearchStateChange={props.onSearchStateChange}
      >
        <Configure hitsPerPage={10} />
        <Header />
        {children}
      </InstantSearch>
    </div>
  )
}

export default withUrlSync(App);
