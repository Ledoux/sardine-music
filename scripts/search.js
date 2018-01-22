const algoliasearch = require('algoliasearch')

const { ALGOLIA_APP_ID, ALGOLIA_API_KEY } = require('../src/utils/secret')

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = client.initIndex('songs');

/*
index.setSettings({
  'attributesForFaceting': ['name']
})
*/

index.search({
  query: 'Resi'
}, function (err, content) {
  console.log(content.hits);
});
