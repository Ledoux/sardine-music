import React from 'react'
import { Configure,
  Hits,
  InstantSearch
} from 'react-instantsearch/dom';
import ReactPlayer from 'react-player'

import ItemsComponentByIndexName from '../items'

const { ALGOLIA_APP_ID, ALGOLIA_API_KEY } = process.env

const Pick = ({ configure, indexName }) => {
  const ItemComponent = ItemsComponentByIndexName[indexName]
  return (
    <div className='pick col-7 mx-auto mt3 p2 mb2'>
      <InstantSearch
        appId={ALGOLIA_APP_ID}
        apiKey={ALGOLIA_API_KEY}
        indexName={indexName}
      >
        <Configure {...configure} />
        <article>
          <Hits hitComponent={ItemComponent} />
        </article>
      </InstantSearch>
    </div>
  )
}

export default Pick
