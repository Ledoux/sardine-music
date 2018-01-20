import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App'
import HomePage from './pages/HomePage'
import PlaylistPage from './pages/PlaylistPage'
import store from './utils/store'

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Route exact
            path='/'
            render={() => <HomePage />} />
          <Route exact
            path='/playlist'
            render={() => <PlaylistPage />} />
        </App>
      </BrowserRouter>
    </Provider>
  )
}

export default Root
