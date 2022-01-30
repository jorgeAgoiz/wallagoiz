import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import LoginIcon from '@mui/icons-material/Login'
import { Box, Typography } from '@mui/material'
import TextFieldWrapper from '../TextfieldWrapper'
import SubmitButton from '../SubmitButton'
import { SignInUser } from '../../services/signInUser'
import { UserContext } from '../../context/UserContext'
import { INITIAL_FORM_STATE_SI } from '../../constants'
import { styleProps, stylePropsButton } from './styles'
import { getMyUserData } from '../../services/getMyUserData'

const schemaSignUp = yup.object({
  email: yup.string().email().required('Requerido'),
  password: yup.string().min(5, 'Mínimo 5 caracteres').required('Requerido')
})

const SignInForm = () => {
  const navigate = useNavigate()
  const { setUserLog } = useContext(UserContext)
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues: INITIAL_FORM_STATE_SI, resolver: yupResolver(schemaSignUp) })

  const onSubmit = async (data) => {
    try {
      const userSigned = await SignInUser(data)
      if (!userSigned.access_token) {
        throw Error(userSigned.detail)
      }
      const myUser = await getMyUserData({ token: userSigned.access_token })
      delete myUser.password

      setUserLog({ ...myUser, logged: true })
      /* global sessionStorage */
      sessionStorage.setItem('token', userSigned.access_token)
      return navigate('/')
    } catch (err) {
      if (err.message === 'Incorrect email or password.') {
        setError('password', {
          type: 'manual',
          message: 'Contraseña o Email invalido'
        })
        return setError('email', {
          type: 'manual',
          message: 'Contraseña o Email invalido'
        })
      }
      return navigate('/error')
    }
  }

  return (
    <>
      <Box component='form' onSubmit={handleSubmit(onSubmit)} style={styleProps}>
        <Typography variant='h5' marginBottom='1rem'>Iniciar sesión</Typography>
        <TextFieldWrapper
          control={control}
          errors={errors}
          name='email'
          label='Email'
        />
        <TextFieldWrapper
          control={control}
          errors={errors}
          name='password'
          label='Contraseña'
          type='password'
        />
        <SubmitButton
          styles={stylePropsButton}
          isSubmitting={isSubmitting}
          Icon={LoginIcon}
          text='Iniciar sesión'
          altText='Iniciando'
        />
      </Box>
    </>
  )
}

export default SignInForm
