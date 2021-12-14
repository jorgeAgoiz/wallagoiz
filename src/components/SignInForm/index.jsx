import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import TextfieldWrapper from '../TextfieldWrapper'
import { INITIAL_FORM_STATE_SI } from '../../constants'
import { styleProps, stylePropsButton } from './styles'

// Validation ****************
const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .required()
    .email('Introduce un email válido.'),
  password: Yup.string()
    .required('Requerido.')
})
// Validation ***************

const SignInForm = () => {
  return (
    <>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE_SI }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, { setFieldError }) => {
          if (values.password !== 'probando') {
            return setFieldError('password', 'Contraseña Incorrecta')
          }
          console.log(values)
          /* hariamos esta función async, enviariamos los datos a la API y refrescariamos
          el contexto global de loggeo */
        }}
      >
        <Form style={styleProps}>
          <Typography variant='h5' marginBottom='1rem'>Iniciar sesión</Typography>
          <TextfieldWrapper name='email' label='Email' />
          <TextfieldWrapper name='password' label='Contraseña' type='password' />
          <Button type='submit' variant='contained' sx={stylePropsButton} color='success' endIcon={<SendIcon />}>Enviar</Button>
        </Form>
      </Formik>
    </>

  )
}

export default SignInForm
