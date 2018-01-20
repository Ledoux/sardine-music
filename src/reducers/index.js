import { combineReducers } from 'redux'

// import browser from './browser'
import modal from './modal'
import navigation from './navigation'
import player from './player'

const rootReducer = combineReducers({
  // browser,
  modal,
  navigation,
  player
})

export default rootReducer
