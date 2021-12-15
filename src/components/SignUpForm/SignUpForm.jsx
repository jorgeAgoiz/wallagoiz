/* import { Box } from '@mui/material' */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { styleProps, stylePropsButton, stylePropsBox } from './styles'
import { Formik, Form } from 'formik'
import { Box, Button, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import TextfieldWrapper from '../TextfieldWrapper'
import { INITIAL_FORM_STATE } from '../../constants'
import { createUser } from '../../services/createUser'

// Validation ****************
const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string()
    .required('Requerido.')
    .min(3, 'Introduce un nombre válido.'),
  lastName: Yup.string()
    .required('Requerido.')
    .min(2, 'Introduce un apellido válido.'),
  email: Yup.string()
    .required('Requerido.')
    .email('Introduce un email válido.'),
  location: Yup.string()
    .required('Introduce una ubicación válida.'),
  password: Yup.string()
    .required('Requerido.'),
  confirmPassword: Yup.string()
    .required('Requerido.')
})
// Validation ***************

const SignUpForm = () => {
  const navigate = useNavigate()

  return (
    <>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={async (values, { setFieldError }) => {
          if (values.password !== values.confirmPassword) {
            return setFieldError('confirmPassword', 'Las contraseñas deben coincidir.')
          }
          const newUser = await createUser(values)
          console.log(newUser)
          return navigate('/')
        }}
      >
        <Form style={styleProps}>
          <Typography variant='h5' marginBottom='1rem'>Registrarse</Typography>
          <Box sx={stylePropsBox}>
            <TextfieldWrapper name='name' label='Nombre' />
            <TextfieldWrapper name='lastName' label='Apellidos' />
          </Box>

          <Box sx={stylePropsBox}>
            <TextfieldWrapper name='email' label='Email' />
            <TextfieldWrapper name='location' label='Ubicación' />
          </Box>

          <Box sx={stylePropsBox}>
            <TextfieldWrapper name='password' label='Contraseña' type='password' />
            <TextfieldWrapper name='confirmPassword' label='Confirmar contraseña' type='password' />
          </Box>

          <Button type='submit' variant='contained' sx={stylePropsButton} color='success' endIcon={<SendIcon />}>Enviar</Button>
        </Form>
      </Formik>
    </>
  )
}

export default SignUpForm
