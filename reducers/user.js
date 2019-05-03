import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/index'

let newState = {
  user: {
    isLogged: false,
    username: '',
    token: ''
  }
}

export default function (state = newState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      state.user.isLogged = true
      return state
    default:
      return state
  }
}
