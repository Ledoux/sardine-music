import React from 'react'
import { connectSearchBox } from 'react-instantsearch/connectors';

import Icon from './Icon'

const SearchBox = ({ currentRefinement, refine }) => (
  <div className="search-box col-6">
    <input type="text"
      value={currentRefinement}
      onChange={e => refine(e.target.value)}
      autoComplete="off"
    />
    <button className="button button--alive">
      <Icon icon='search' />
    </button>
  </div>
);

export default connectSearchBox(SearchBox)
