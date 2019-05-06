// Action types wich reference to appropriate reducers
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const APPEND_EVENTS = 'APPEND_EVENTS'
export const ADD_EVENTS = 'ADD_EVENTS'

/**
 * Action that fires reducer to set current user
 *
 * @param {Object} user
 *
 * @returns {Object}
 */
export function login(user) {
  if (user.username === 'nikajorjika' && user.password === '123123') {
    return {
      type: LOGIN_SUCCESS,
      payload: user,
    }
  } else {
    return {
      type: LOGIN_ERROR,
    }
  }
}
/**
 * Action to add newly fetched events
 *
 * @param {Array} events
 *
 * @returns {Object}
 */
export function addEvents( events ) {
  return {
    type: ADD_EVENTS,
    payload: events,
  }
}
