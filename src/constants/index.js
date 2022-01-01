/* Arrays */
export const pages = ['Favoritos', 'Súbelo', 'Buzón']
export const settings = ['Perfil', 'Cuenta', 'Tus productos', 'Cerrar Sesión']
export const signIn = ['Iniciar sesión', 'Registrarse']
export const options = [
  {
    name: 'male',
    label: 'Hombre'
  },
  {
    name: 'female',
    label: 'Mujer'
  }
]
export const articlesCategory = [
  {
    name: 'cars',
    label: 'Coches'
  },
  {
    name: 'motorbikes',
    label: 'Motos'
  },
  {
    name: 'motor accesories',
    label: 'Motor y Accesorios'
  },
  {
    name: 'fashion and accesories',
    label: 'Moda y Accesorios'
  },
  {
    name: 'real estate',
    label: 'Inmobiliaria'
  },
  {
    name: 'tv, audio and photo',
    label: 'TV, Audio y Foto'
  },
  {
    name: 'mobile phones',
    label: 'Móviles y Telefonía'
  },
  {
    name: 'computer science and electronics',
    label: 'Informática y Electrónica'
  },
  {
    name: 'sports and hobbies',
    label: 'Deporte y Ocio'
  },
  {
    name: 'Bikes',
    label: 'Bicicletas'
  },
  {
    name: 'consoles and video games',
    label: 'Consolas y Videojuegos'
  },
  {
    name: 'home and garden',
    label: 'Hogar y Jardín'
  },
  {
    name: 'home appliances',
    label: 'Electrodomésticos'
  },
  {
    name: 'cinema books and music',
    label: 'Cine, Libros y Música'
  },
  {
    name: 'children and babies',
    label: 'Niños y Bebés'
  },
  {
    name: 'collecting',
    label: 'Coleccionismo'
  },
  {
    name: 'construction materials',
    label: 'Materiales de Construcción'
  },
  {
    name: 'industry and agriculture',
    label: 'Industria y Agricultura'
  },
  {
    name: 'jobs',
    label: 'Empleo'
  },
  {
    name: 'services',
    label: 'Servicios'
  },
  {
    name: 'others',
    label: 'Otros'
  }
]

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
/* Profile Form */
export const INITIAL_FORM_STATE_PROF = {
  name: '',
  lastName: '',
  location: ''
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
