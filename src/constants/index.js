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

/* Campos del formulario cambiar email */
export const fieldsDataEmail = [
  {
    id: 1,
    name: 'email',
    label: 'Email'
  },
  {
    id: 2,
    name: 'confirmEmail',
    label: 'Confirmar Email'
  }
]
/* Campos del formulario cambiar password */
export const fieldsDataPassword = [
  {
    id: 1,
    name: 'password',
    label: 'Contraseña Actual'
  },
  {
    id: 2,
    name: 'newPassword',
    label: 'Nueva Contraseña'
  },
  {
    id: 3,
    name: 'confirmNewPassword',
    label: 'Confirmar Contraseña'
  }
]

/* API URLS */
export const SERVER_URL = 'http://localhost:3012'
