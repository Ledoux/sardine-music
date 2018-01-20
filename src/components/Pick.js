import React from 'react'
import { Configure,
  Hits,
  InstantSearch
} from 'react-instantsearch/dom';

import ItemsComponentByIndexName from '../items'

const { ALGOLIA_APP_ID, ALGOLIA_API_KEY } = process.env

const Pick = ({ configure, indexName }) => {
  console.log('configure', configure, indexName)
  return (
    <div>
      <InstantSearch
        appId={ALGOLIA_APP_ID}
        apiKey={ALGOLIA_API_KEY}
        indexName={indexName}
      >
        <Configure {...configure} />
        <article>
          <Hits hitComponent={ItemsComponentByIndexName[indexName]} />
        </article>
      </InstantSearch>
    </div>
  )
}

export default Pick
