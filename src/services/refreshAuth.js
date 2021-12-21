import { SERVER_URL } from '../constants'

export const RefreshAuth = ({ id }) => {
  /* global fetch */
  return fetch(`${SERVER_URL}/users?id=${id}`)
    .then(data => data.json())
    .catch(err => err)
}
