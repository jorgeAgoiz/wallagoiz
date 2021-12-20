import React, { useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Box, Button, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import SaveIcon from '@mui/icons-material/Save'
import { LoadingButton } from '@mui/lab'
import { styleProps, stylePropsButton } from './styles'
import { INITIAL_FORM_STATE_SI } from '../../constants'
import TextFieldWrapper from '../TextfieldWrapper'
import { SignInUser } from '../../services/createUser'
import { UserContext } from '../../context/UserContext'

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
    /* N2 - Este método habra que modificarlo una vez hecho el
    BackEnd para adaptarlo a los nuevos requisitos */
    try {
      const userSigned = await SignInUser(data)
      if (userSigned.length <= 0) {
        setError('password', {
          type: 'manual',
          message: 'Contraseña o Email invalido'
        })
        return setError('email', {
          type: 'manual',
          message: 'Contraseña o Email invalido'
        })
      }
      delete userSigned[0].password
      setUserLog({ ...userSigned[0], logged: true })
      return navigate('/')
    } catch (err) {
      console.log(err)
      return navigate('/error')
    }
    /* *************************************************** */
  }

  const submitButton = () => {
    return !isSubmitting
      ? <Button type='submit' variant='contained' sx={stylePropsButton} color='success' endIcon={<LoginIcon />}>Iniciar Sesión</Button>
      : (
        <LoadingButton
          loading
          loadingPosition='end'
          endIcon={<SaveIcon />}
          variant='outlined'
        >
          Iniciando sesión
        </LoadingButton>)
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
        {
          submitButton()
        }
      </Box>
    </>

  )
}

export default SignInForm

/* Empezar de cero con react-hook-form */
