import { SERVER_URL } from '../constants'
/* global fetch */
export const createUser = ({ name, email, password }) => {
  return fetch(`${SERVER_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(data => data.json())
    .then(result => result)
}
