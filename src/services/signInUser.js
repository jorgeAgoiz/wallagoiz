import { SERVER_URL } from '../constants'
/* N1 - Metodo SignInUser temporal, modificar para el backend:
- Metodo POST
- Cambiar el uso de esta funcion fetch
- Crear una nueva función para traer los datos del usuario al contexto global
- Estudiar como incluir el bearer token en proximas llamadas
*/
export const SignInUser = ({ email, password }) => {
  /* global fetch */
  return fetch(`${SERVER_URL}/users?email=${email}&password=${password}`)
    .then(data => data.json())
    .then(result => {
      return result
    })
    .catch(err => err)
}
