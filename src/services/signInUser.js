import { SERVER_URL_FASTAPI } from '../constants'

export const SignInUser = ({ email, password }) => {
  /* global fetch */
  return fetch(`${SERVER_URL_FASTAPI}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(data => data.json())
}
