import React from 'react'
import { Configure,
  InstantSearch
} from 'react-instantsearch/dom';

import Hits from './Hits'
import HitComponentsByIndexName from '../hits'

const { ALGOLIA_APP_ID, ALGOLIA_API_KEY } = process.env

const Pick = ({ configure, indexName }) => {
  const HitComponent = HitComponentsByIndexName[indexName]
  return (
    <div className='pick col-7 mx-auto mt3 p2 mb2'>
      <InstantSearch
        appId={ALGOLIA_APP_ID}
        apiKey={ALGOLIA_API_KEY}
        indexName={indexName}
      >
        <Configure {...configure} />
        <article>
          <Hits HitComponent={HitComponent} />
        </article>
      </InstantSearch>
    </div>
  )
}

export default Pick
