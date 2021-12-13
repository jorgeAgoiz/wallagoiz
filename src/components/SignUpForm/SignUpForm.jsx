/* import { Box } from '@mui/material' */
import React from 'react'
import * as Yup from 'yup'
import { styleProps } from './styles'
import { Formik, Form } from 'formik'
import { Typography } from '@mui/material'
import TextfieldWrapper from '../TextfieldWrapper'

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}
const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(3, 'Introduce un nombre válido.'),
  email: Yup.string()
    .required()
    .email('Enter a valid email.'),
  password: Yup.string()
    .required('Required'),
  confirmPassword: Yup.string()
    .required('Required')
})
/* Continuamos aqui ajustando la validación y estilando la grid
de nuestro formulario. */
const SignUpForm = () => {
  return (
    <>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={values => console.log(values)}
      >
        <Form style={styleProps}>
          <Typography variant='h2'>Registrarse</Typography>
          <Typography variant='subtitle1'>Nombre</Typography>
          <TextfieldWrapper />
          <Typography variant='h5'>Email</Typography>
          <TextfieldWrapper />
          <Typography variant='h5'>Contraseña</Typography>
          <TextfieldWrapper />
          <Typography variant='h5'>Confirmar contraseña</Typography>
          <TextfieldWrapper />
        </Form>
      </Formik>
    </>

  )
}

export default SignUpForm
/* Mirar la mejor manera para estilar la grid del formulario */
