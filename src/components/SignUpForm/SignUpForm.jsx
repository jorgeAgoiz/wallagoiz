import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { styleProps, stylePropsBox, stylePropsButton, stylePropsTf } from './styles'
import { Box, Button, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import SaveIcon from '@mui/icons-material/Save'
import { INITIAL_FORM_STATE_SU } from '../../constants'
import TextFieldWrapper from '../TextfieldWrapper'
import { createUser } from '../../services/createUser'
import { useNavigate } from 'react-router-dom'
import { LoadingButton } from '@mui/lab'

const schemaSignUp = yup.object({
  name: yup.string().required('Requerido'),
  lastName: yup.string().required('Requerido'),
  email: yup.string().email().required('Requerido'),
  location: yup.string().required('Requerido'),
  password: yup.string().min(5, 'Minimo 5 caracteres').required('Requerido'),
  confirmPassword: yup.string().min(5, 'Minimo 5 caracteres').required('Requerido')
})

const SignUpForm = () => {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues: INITIAL_FORM_STATE_SU, resolver: yupResolver(schemaSignUp) })

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      return setError('confirmPassword', {
        type: 'manual',
        message: 'Las contraseñas deben coincidir.'
      })
    }
    try {
      await createUser(data)
      return navigate('/')
    } catch (err) {
      console.log(err)
      return navigate('/error')
    }
  }

  const submitButton = () => {
    return !isSubmitting
      ? <Button type='submit' variant='contained' sx={stylePropsButton} color='success' endIcon={<SendIcon />}>Enviar</Button>
      : (
        <LoadingButton
          loading
          loadingPosition='end'
          endIcon={<SaveIcon />}
          variant='outlined'
        >
          Guardando
        </LoadingButton>)
  }

  return (
    <>
      <Box component='form' onSubmit={handleSubmit(onSubmit)} style={styleProps}>
        <Typography variant='h5' marginBottom='1rem'>Registrarse</Typography>
        <Box sx={stylePropsBox}>
          <TextFieldWrapper
            control={control}
            errors={errors}
            name='name'
            label='Nombre'
            stylePropsTf={stylePropsTf}
          />
          <TextFieldWrapper
            control={control}
            errors={errors}
            name='lastName'
            label='Apellidos'
            stylePropsTf={stylePropsTf}
          />
        </Box>
        <Box sx={stylePropsBox}>
          <TextFieldWrapper
            control={control}
            errors={errors}
            name='email'
            label='Email'
            stylePropsTf={stylePropsTf}
          />
          <TextFieldWrapper
            control={control}
            errors={errors}
            name='location'
            label='Ubicación'
            stylePropsTf={stylePropsTf}
          />
        </Box>
        <Box sx={stylePropsBox}>
          <TextFieldWrapper
            control={control}
            errors={errors}
            name='password'
            label='Contraseña'
            type='password'
            stylePropsTf={stylePropsTf}
          />
          <TextFieldWrapper
            control={control}
            errors={errors}
            name='confirmPassword'
            label='Confirmar contraseña'
            type='password'
            stylePropsTf={stylePropsTf}
          />
        </Box>
        {
          submitButton()
        }
      </Box>
    </>
  )
}

export default SignUpForm
