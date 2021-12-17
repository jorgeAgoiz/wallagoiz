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
      return {
        name: result[0].name,
        lastName: result[0].lastName,
        email: result[0].email,
        location: result[0].location,
        id: result[0].id,
        gender: result[0].gender,
        birthday: result[0].birthday,
        profilePic: result[0].profilePic
      }
    })
    .catch(err => err)
}

/* Función de prueba para traer fotos y articulos */
/* export const getArticles = () => {
  return fetch('https://jsonplaceholder.typicode.com/photos')
    .then(data => data.json())
    .then(result => result.slice(0, 9))
    .catch(err => err)
} */
