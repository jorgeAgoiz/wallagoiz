import { SERVER_URL } from '../constants'

export const updateUser = (id, fields) => {
  /* global fetch */
  return fetch(`${SERVER_URL}/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fields)
  })
    .then(data => {
      console.log(data.status)
      return data.json()
    })
    .catch(err => err)
}
