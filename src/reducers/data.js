// ACTIONS
export const ASSIGN_DATA = 'ASSIGN_DATA '

// INITIAL STATE
const initialState = {
  url: null
}

// REDUCER
function data (state = initialState, action) {
  switch (action.type) {
    case ASSIGN_DATA:
      return Object.assign({}, state, action.patch)
    default:
      return state
  }
}

// ACTION CREATORS
export function assignData (patch) {
  return { type: ASSIGN_DATA, patch }
}

// default
export default data
