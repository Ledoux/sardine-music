import algoliasearch from 'algoliasearch'

import { ALGOLIA_APP_ID, ALGOLIA_API_KEY } from './secret'

const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY)

export default algoliaClient
