import PropTypes from 'prop-types'
import React from 'react'
import { Configure,
  Hits,
  InstantSearch
} from 'react-instantsearch/dom';

import SearchBox from '../components/SearchBox'
import withUrlSync from '../hocs/withUrlSync'
import ItemsComponentByIndexName from '../items'

const { ALGOLIA_APP_ID, ALGOLIA_API_KEY } = process.env

const Explore = ({ configure,
  createURL,
  indexName,
  onSearchStateChange,
  searchState,
  slug
}) => {
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
        <div className="col-6 mx-auto mt2 mb3">
          <SearchBox />
        </div>
        <article>
          <Hits hitComponent={ItemsComponentByIndexName[indexName]} />
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
  indexName: PropTypes.string.isRequired
}

export default withUrlSync(Explore)
