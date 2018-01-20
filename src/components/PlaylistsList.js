import React from 'react'
import {
  connectSearchBox
} from 'react-instantsearch/connectors';
import { Hits } from 'react-instantsearch/dom';

import PlaylistItem from './PlaylistItem'

const PlaylistsList = connectSearchBox(() => (
  <article>
    <Hits hitComponent={PlaylistItem} />
  </article>
));

export default PlaylistsList
