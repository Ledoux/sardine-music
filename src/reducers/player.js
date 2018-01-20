// ACTIONS
export const ASSIGN_PLAYER = 'ASSIGN_PLAYER '

// INITIAL STATE
const initialState = {
  url: null
}

// REDUCER
function player (state = initialState, action) {
  switch (action.type) {
    case ASSIGN_PLAYER:
      return Object.assign({}, state, action.patch)
    default:
      return state
  }
}

// ACTION CREATORS
export function assignPlayer (patch) {
  return { type: ASSIGN_PLAYER, patch }
}

// default
export default player
