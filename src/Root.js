import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App'
import HomePage from './pages/HomePage'
import store from './utils/store'

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Route exact
            path='/'
            render={() => <HomePage />} />
        </App>
      </BrowserRouter>
    </Provider>
  )
}

export default Root
