import { SERVER_URL } from '../constants'

/* global fetch */
export const createFav = ({ userId, articleId }) => {
  const newFav = {
    userId,
    articleId
  }

  return fetch(`${SERVER_URL}/favs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newFav)
  })
    .then(data => data.json())
    .catch(err => err)
}
