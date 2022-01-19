import { /* SERVER_URL, */ SERVER_URL_FASTAPI } from '../constants'
/* global fetch */
export const createUser = ({ name, lastName, email, password, location }) => {
  const newUser = {
    name,
    lastName,
    email,
    password,
    location
  }
  return fetch(`${SERVER_URL_FASTAPI}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
    .then(data => data.json())
    .catch(err => err)
}
/* Conectado con FASTAPI */
