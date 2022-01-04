import { SERVER_URL } from '../constants'
import { convertDate } from '../utils/convertDate'
/* global fetch */
export const createArticle = ({ title, category, price, description, picture, userId }) => {
  const newArticle = {
    userId,
    title,
    description,
    price,
    category,
    created_at: convertDate(new Date(Date.now())),
    picture
  }
  return fetch(`${SERVER_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newArticle)
  })
    .then(data => data.json())
    .catch(err => err)
}
