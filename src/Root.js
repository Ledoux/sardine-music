import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App'
import routes from './utils/routes'
import store from './utils/store'

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App>
          { routes.map((route, index) => <Route key={index} {...route} />) }
        </App>
      </BrowserRouter>
    </Provider>
  )
}

export default Root
