import { SERVER_URL_FASTAPI } from '../constants'

export const getFavs = ({ token }) => {
  /* global fetch */
  return fetch(`${SERVER_URL_FASTAPI}/favs`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(data => data.json())
}
