import React from 'react';

import Header from './components/Header'

const App = ({ children }) => {
  return (
    <div className="app">
      <Header />
      {children}
    </div>
  )
}

export default App
