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
  return fetch(`${SERVER_URL}/users?email=${email}&password=${password}`)
    .then(data => data.json())
    .then(result => {
      return result
    })
    .catch(err => err)
}

export const RefreshAuth = ({ id }) => {
  return fetch(`${SERVER_URL}/users?id=${id}`)
    .then(data => data.json())
    .catch(err => err)
}

/* Función de prueba para traer fotos y articulos */
/* export const getArticles = () => {
  return fetch('https://jsonplaceholder.typicode.com/photos')
    .then(data => data.json())
    .then(result => result.slice(0, 9))
    .catch(err => err)
} */

/* Separar estas funciones en archivos independientes */
