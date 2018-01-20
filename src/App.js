import React from 'react';

import Header from './components/Header'
import Menu from './components/Menu'

const App = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <Menu />
      {children}
    </div>
  )
}

export default App
