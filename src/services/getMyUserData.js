import { SERVER_URL_FASTAPI } from '../constants'

export const getMyUserData = ({ token }) => {
  /* global fetch */
  return fetch(`${SERVER_URL_FASTAPI}/user`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(data => data.json())
    .catch(err => err)
}
