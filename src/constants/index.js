/* Arrays */
export const pages = ['Favoritos', 'Súbelo', 'Buzón']
export const settings = ['Perfil', 'Cuenta', 'Tus productos', 'Cerrar Sesión']
export const signIn = ['Iniciar sesión', 'Registrarse']

/* Sign Up Form */
export const INITIAL_FORM_STATE_SU = {
  name: '',
  lastName: '',
  email: '',
  location: '',
  password: '',
  confirmPassword: ''
}
/* Sign In Form */
export const INITIAL_FORM_STATE_SI = {
  email: '',
  password: ''
}
/* Entidad Usuario por defecto */
export const defaultUser = {
  id: null,
  name: null,
  lastName: null,
  email: null,
  location: null,
  profilePic: null,
  birthday: null,
  gender: null,
  password: null
}
/* API URLS */
export const SERVER_URL = 'http://localhost:3012'
