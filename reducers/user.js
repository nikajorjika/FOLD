import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/index'

const cloneObject = function(clonable) {
  return JSON.parse(JSON.stringify(clonable))
}

let newState = { user: {
  isLogged: false,
  username: '',
  password: ''
} }

export default function (state, action){
  switch(action.type){
    case LOGIN_SUCCESS: 
      newState = cloneObject(state)
      newState.user.isLogged = false
      return newState
    default:
      return state || newState
  }
}
