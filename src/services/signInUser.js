import { SERVER_URL } from '../constants'
/* N1 - Metodo SignInUser temporal, modificar para el backend:
- Metodo POST
- Manejar el JWT
- Quiza manejar el sessionStorage o el contexto */
export const SignInUser = ({ email, password }) => {
  /* global fetch */
  return fetch(`${SERVER_URL}/users?email=${email}&password=${password}`)
    .then(data => data.json())
    .then(result => {
      return result
    })
    .catch(err => err)
}
