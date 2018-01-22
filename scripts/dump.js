const algoliasearch = require('algoliasearch')
const fs = require('fs')

const { ALGOLIA_APP_ID, ALGOLIA_API_KEY } = require('../src/utils/secret')

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const jsonDataDir = `${__dirname}/../data/json_data`

const indexNames = ['artists', 'playlists', 'songs']

Promise.all(indexNames.map(indexName => {
  const index = client.initIndex(indexName);
  index.search({}, function (err, content) {
    console.log(content.hits)
    fs.writeFileSync(`${jsonDataDir}/${indexName}.json`,
      JSON.stringify(content.hits, null, 2))
  })
}))
