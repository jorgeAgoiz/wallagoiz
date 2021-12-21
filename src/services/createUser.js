import { SERVER_URL, defaultUser } from '../constants'
/* global fetch */
export const createUser = ({ name, lastName, email, password, location }) => {
  const newUser = {
    ...defaultUser,
    name,
    lastName,
    email,
    password,
    location
  }
  return fetch(`${SERVER_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
    .then(data => data.json())
    .catch(err => err)
}
