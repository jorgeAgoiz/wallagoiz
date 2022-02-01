import { SERVER_URL_FASTAPI } from '../constants'
/* global fetch */
export const createArticle = ({ title, category, price, description, picture, userId, token }) => {
  const newArticle = {
    userId,
    title,
    description,
    price,
    category,
    picture
  }
  console.log(newArticle)
  return fetch(`${SERVER_URL_FASTAPI}/article`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(newArticle)
  })
    .then(data => data.json())
}
