import React from "react"

import Hamburger from "./Hamburger"
import SearchBox from "./SearchBox"

const Header = () => (
  <header className="header flex flex-start items-center" >
    <Hamburger className="hamburger ml1" />
    <div className="flex-auto" />
    <SearchBox />
    <div className="flex-auto" />
    <div className="mr2">
      My App
    </div>
  </header>
);

export default Header
