import React from 'react'

import Explore from '../components/Explore'

const ListPage = ({ indexName, ItemComponent }) => {
  return (
    <main className="page">
      <Explore indexName={indexName} ItemComponent={ItemComponent} />
    </main>
  )
}

export default ListPage
