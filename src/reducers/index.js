import { combineReducers } from 'redux'

import browser from './browser'
import data from './data'
import modal from './modal'
import navigation from './navigation'
import player from './player'

const rootReducer = combineReducers({
  browser,
  data,
  modal,
  navigation,
  player
})

export default rootReducer
