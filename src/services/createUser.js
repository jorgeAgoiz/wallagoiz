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
    .then(data => {
      if (data.status === 406) {
        const error = new Error('Bad Bad Baaaadd!!!')
        error.code = 406
        throw error
      }
      return data.json()
    })
}
/*
  - Conectado con FASTAPI
  - Quiza pueda hacer una manejador de errores customizado
  - Limpiar codigo y limpiar variables sin usar
*/
