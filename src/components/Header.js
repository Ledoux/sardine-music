import React from "react"

import Hamburger from "./Hamburger"
import Icon from "./Icon"

const Header = () => (
  <header className="header flex flex-start items-center" >
    <Hamburger className="hamburger ml1" />
    <div className="flex-auto" />
    <div className="header__title h2 mr2">
      La Sardine
    </div>
    <div className="flex-auto" />
    <div className="mr2">
      <Icon icon="fish-skeleton" />
    </div>
  </header>
);

export default Header
