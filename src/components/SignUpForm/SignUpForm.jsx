/* import { Box } from '@mui/material' */
import React from 'react'
import * as Yup from 'yup'
import { styleProps, stylePropsButton } from './styles'
import { Formik, Form } from 'formik'
import { Button, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import TextfieldWrapper from '../TextfieldWrapper'
import { INITIAL_FORM_STATE } from '../../constants'

// Validation ****************
const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(3, 'Introduce un nombre válido.'),
  email: Yup.string()
    .required()
    .email('Introduce un email válido.'),
  password: Yup.string()
    .required('Requerido.'),
  confirmPassword: Yup.string()
    .required('Requerido.')
})
// Validation ***************

const SignUpForm = () => {
  return (
    <>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, { setFieldError }) => {
          if (values.password !== values.confirmPassword) {
            return setFieldError('confirmPassword', 'Las contraseñas deben coincidir.')
          }
          console.log(values)
          /* hariamos esta función async, comparariamos los passwords
          y si todo esta correcto mandariamos a la api los datos */
        }}
      >
        <Form style={styleProps}>
          <Typography variant='h5' marginBottom='1rem'>Registrarse</Typography>
          <TextfieldWrapper name='name' label='Nombre' />
          <TextfieldWrapper name='email' label='Email' />
          <TextfieldWrapper name='password' label='Contraseña' />
          <TextfieldWrapper name='confirmPassword' label='Confirmar contraseña' />
          <Button type='submit' variant='contained' sx={stylePropsButton} color='success' endIcon={<SendIcon />}>Enviar</Button>
        </Form>
      </Formik>
    </>

  )
}

export default SignUpForm
