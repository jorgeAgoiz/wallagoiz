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

/* N1 - Metodo SignInUser temporal, modificar para el backend:
- Metodo POST
- Manejar el JWT
- Quiza manejar el sessionStorage o el contexto */
export const SignInUser = ({ email, password }) => {
  return fetch(`${SERVER_URL}/users?email=${email}&password=${password}`, {
    method: 'GET'
  })
    .then(data => data.json())
    .catch(err => err)
}
