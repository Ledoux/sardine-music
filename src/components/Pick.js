import React from 'react'
import { Configure,
  InstantSearch
} from 'react-instantsearch/dom';

import Hit from './Hit'
import HitComponentsByIndexName from '../hits'

const { ALGOLIA_APP_ID, ALGOLIA_API_KEY } = process.env

const Pick = ({ configure,
  indexName,
  onHitsChange
}) => {
  const HitComponent = HitComponentsByIndexName[indexName]
  return (
    <div className='pick col-10 sm-col-7 mx-auto mt3 p2 mb2'>
      <InstantSearch
        appId={ALGOLIA_APP_ID}
        apiKey={ALGOLIA_API_KEY}
        indexName={indexName}
      >
        <Configure {...configure} />
        <article>
          <Hit indexName={indexName}
            HitComponent={HitComponent}
            onHitsChange={onHitsChange}
          />
        </article>
      </InstantSearch>
    </div>
  )
}

export default Pick
