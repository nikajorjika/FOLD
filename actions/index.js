export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export function login({username, password}){
  if(username === 'nikajorjika' && password === '123123'){
    return {
      type: LOGIN_SUCCESS
    }
  } else {
    return {
      type: LOGIN_ERROR
    }
  }
}