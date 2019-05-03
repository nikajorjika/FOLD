export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export function login(user){
  if(user.username === 'nikajorjika' && user.password === '123123'){
    return {
      type: LOGIN_SUCCESS,
      payload: user
    }
  } else {
    return {
      type: LOGIN_ERROR
    }
  }
}
