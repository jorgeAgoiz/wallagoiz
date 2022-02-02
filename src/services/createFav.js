import { SERVER_URL_FASTAPI } from '../constants'

/* global fetch */
export const createFav = ({ userId, articleId, token }) => {
  const newFav = {
    userId,
    articleId
  }

  return fetch(`${SERVER_URL_FASTAPI}/favs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(newFav)
  })
    .then(data => data.json())
}
