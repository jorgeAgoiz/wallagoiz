import { SERVER_URL_FASTAPI } from '../constants'

export const updateUser = ({ fields, token }) => {
  /* global fetch */
  return fetch(`${SERVER_URL_FASTAPI}/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(fields)
  })
    .then(data => data.json())
    .catch(err => err)
}
