import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import TextfieldWrapper from '../TextfieldWrapper'
import { INITIAL_FORM_STATE_SI } from '../../constants'
import { styleProps, stylePropsButton } from './styles'
import { SignInUser } from '../../services/createUser'
import { UserContext } from '../../context/UserContext'

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
  const navigate = useNavigate()
  const { setUserLog } = useContext(UserContext)

  return (
    <>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE_SI }}
        validationSchema={FORM_VALIDATION}
        onSubmit={async (values, { setFieldError }) => {
          try {
            // N1 - Implementacion de JWT y modificaciones en el metodo
            const result = await SignInUser(values)
            if (result.length <= 0) {
              return setFieldError('password', 'Contraseña Incorrecta')
            }
            await setUserLog({ email: result[0].email, id: result[0].id, logged: true })
            return navigate('/')
          } catch (err) {
            return console.log(err)
          }
          // **********************************************************
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
