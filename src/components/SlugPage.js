import React from 'react'

import Explore from '../components/Explore'

const SlugPage = ({ filters, indexName, ItemComponent }) => {
  return (
    <main className="page">
      <Explore configure={{ filters: `playlist_slugs:${slug}` }}
        indexName='songs'
        ItemComponent={ItemComponent}
      />
    </main>
  )
}

export default SlugPage
