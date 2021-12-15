import { SERVER_URL } from '../constants'
/* global fetch */
export const createUser = ({ name, lastName, email, password, location }) => {
  return fetch(`${SERVER_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, lastName, email, password, location })
  })
    .then(data => data.json())
    .then(result => result)
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
    .then(result => result)
    .catch(err => err)
}
