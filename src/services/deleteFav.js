import { SERVER_URL } from '../constants'

/* global fetch */
export const deleteFav = ({ userId, articleId }) => {
  return fetch(`${SERVER_URL}/favs?articleId=${articleId}`, {
    method: 'DELETE'
  })
    .then(data => data.json())
    .catch(err => err)
}

/* Esto no funcionaría porque con el metodo DELETE no acepta queries */
