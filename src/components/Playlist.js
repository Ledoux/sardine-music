import React from 'react'
import {
  connectSearchBox
} from 'react-instantsearch/connectors';
import { Hits } from 'react-instantsearch/dom';

import SongItem from './SongItem'

const Playlist = connectSearchBox(() => (
  <article>
    <Hits hitComponent={SongItem} />
  </article>
));

export default Playlist
