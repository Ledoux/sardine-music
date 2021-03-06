import PropTypes from 'prop-types'
import React from 'react'
import { Configure,
  InstantSearch
} from 'react-instantsearch/dom';

import Hits from '../components/Hits'
import SearchBox from '../components/SearchBox'
import withUrlSync from '../hocs/withUrlSync'
import HitComponentsByIndexName from '../hits'

const { ALGOLIA_APP_ID, ALGOLIA_API_KEY } = process.env

const Explore = ({ configure,
  createURL,
  indexName,
  onHitsChange,
  onSearchStateChange,
  searchState,
  slug,
  storeKey
}) => {
  const HitComponent = HitComponentsByIndexName[indexName]
  return (
    <div className='sm-col-10 mx-auto p1'>
      <InstantSearch
        appId={ALGOLIA_APP_ID}
        apiKey={ALGOLIA_API_KEY}
        indexName={indexName}
        searchState={searchState}
        createURL={createURL}
        onSearchStateChange={onSearchStateChange}
      >
        <Configure {...configure} />
        <div className="px2 mt2 mb3">
          <SearchBox />
        </div>
        <article>
          <Hits indexName={indexName}
            HitComponent={HitComponent}
            onHitsChange={onHitsChange}
            storeKey={storeKey}
          />
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
