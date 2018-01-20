import PropTypes from 'prop-types'
import React from 'react'
import { Configure,
  Hits,
  InstantSearch
} from 'react-instantsearch/dom';

import SearchBox from '../components/SearchBox'
import withUrlSync from '../hocs/withUrlSync'

const { ALGOLIA_APP_ID, ALGOLIA_API_KEY } = process.env

const Explore = ({ configure,
  createURL,
  indexName,
  ItemComponent,
  onSearchStateChange,
  searchState,
  slug
}) => {
  console.log('configure', configure, indexName)
  return (
    <div className='col-6 mx-auto'>
      <InstantSearch
        appId={ALGOLIA_APP_ID}
        apiKey={ALGOLIA_API_KEY}
        indexName={indexName}
        searchState={searchState}
        createURL={createURL}
        onSearchStateChange={onSearchStateChange}
      >
        <Configure {...configure} />
        <div className="col-6 mx-auto mt2 mb2">
          <SearchBox />
        </div>
        <article>
          <Hits hitComponent={ItemComponent} />
        </article>
      </InstantSearch>
    </div>
  )
}

Explore.defaultProps = {
  configure: {
    hitsPerPage: 10
  }
}

Explore.propTypes = {
  indexName: PropTypes.string.isRequired,
  ItemComponent: PropTypes.func.isRequired
}

export default withUrlSync(Explore)
