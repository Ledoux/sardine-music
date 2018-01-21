// ACTIONS
export const ASSIGN_PLAYER = 'ASSIGN_PLAYER '

// INITIAL STATE
const initialState = {
  songIndex: null
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

// SELECTOR
export function getPlayerUrl (state) {
  const songs = state.data.songs
  const songIndex = state.player.songIndex
  const song = songs && songs[songIndex]
  return song && song.url
}

// default
export default player
