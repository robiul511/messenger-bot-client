import { applyMiddleware, createStore } from "redux"
import thunk from 'redux-thunk'

const initialState = {
  allMessages : [],
  loading: true
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ALLMESSAGES/SETALLMESSAGES':
      return {...state, allMessages: action.payload}
    case 'LOADING/SETLOADING':
      return {...state, loading: action.payload}
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store