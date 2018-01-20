import React from 'react'

import Hamburger from './Hamburger'
import SearchBox from './SearchBox'

const Header = () => (
  <header className="header flex items-center justify-around" >
    <Hamburger className='hamburger mr1' />
    <SearchBox />
    <div>
      My App
    </div>
  </header>
);

export default Header
