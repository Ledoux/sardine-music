import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';

import Root from './Root'
import './styles/index.scss'
import registerServiceWorker from './utils/registerServiceWorker'
import './utils/styles'

ReactDOM.render(<Root />, document.getElementById('root'))
if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default
    ReactDOM.render((
      <AppContainer>
        <NextRoot />
      </AppContainer>
    ), document.getElementById('root'))
  })
}
registerServiceWorker()
