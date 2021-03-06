/* Arrays */
export const pages = ['Favoritos', 'Súbelo', 'Buzón']
export const settings = ['Perfil', 'Cuenta', 'Tus productos', 'Cerrar Sesión']
export const signIn = ['Iniciar sesión', 'Registrarse']
// Opciones de sexo
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
// Opciones de categorías
// Esto podría ser una tabla aparte y asignarle un ID a cada categoría
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
  password: null,
  rating: 0 // Echarle un ojo a esto
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

/* Fetcher para SWR */
/* global fetch */
export const fetcher = (...args) => fetch(...args).then(res => res.json())
export const fetcherWithToken = (url, token) => fetch(url, {
  headers: {
    Authorization: `Bearer ${token}`
  }
}).then(res => res.json())

/* API URLS */
export const SERVER_URL = 'http://localhost:3012'
export const SERVER_URL_FASTAPI = 'http://127.0.0.1:8000'

export const CHAT_ENGINE_SECRET = import.meta.env.VITE_CHAT_ENGINE_SECRET
export const CHAT_ENGINE_PROJECTID = import.meta.env.VITE_CHAT_ENGINE_PROJECTID
export const CHAT_ENGINE_USER = import.meta.env.VITE_CHAT_ENGINE_USERNAME
