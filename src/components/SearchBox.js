import React from 'react'
import { connectSearchBox } from 'react-instantsearch/connectors';

import Icon from './Icon'

const SearchBox = ({ currentRefinement, refine }) => (
  <div className="search-box flex items-center">
    <button className="button button--inversed button--alive ml2">
      <Icon icon='algolia-mark-black' />
    </button>
    <input className="input"
      type="text"
      value={currentRefinement}
      onChange={e => refine(e.target.value)}
      autoComplete="off"
    />
  </div>
);

export default connectSearchBox(SearchBox)
