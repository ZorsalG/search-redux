export const LOAD_USERS = 'LOAD_USERS'
export const GET_USERS = 'GET_USERS'
export const ERROR_USERS = 'ERROR_USERS'

export function loadUsers() {
  return {
    type: LOAD_USERS,
    payload: [],
  }
}

export function getUsers(users){
  return {
    type: GET_USERS,
    payload: users,
  }
}
