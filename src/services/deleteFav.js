import { SERVER_URL_FASTAPI } from '../constants'

/* global fetch */
export const deleteFav = ({ userId, articleId, token }) => {
  return fetch(`${SERVER_URL_FASTAPI}/favs/${articleId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(data => data.status)
}
