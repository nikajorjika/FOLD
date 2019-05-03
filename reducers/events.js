const GET_EVENTS = 'GET_EVENTS'
const ADD_EVENTS = 'ADD_EVENTS'


export default function (state = [], action) {
  switch (action.type) {
    case ADD_EVENTS:
      return [action.payload.events, ...state]
    case GET_EVENTS:
      return action.payload.events
    default:
      return state
  }
}
