import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { styleProps, stylePropsButton } from './styles'
import { Box, Button, TextField, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { INITIAL_FORM_STATE_SU } from '../../constants'

const schemaSignUp = yup.object({
  name: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  location: yup.string().required(),
  password: yup.string().min(5).required(),
  confirmPassword: yup.string().min(5).required()
})

const SignUpForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({ defaultValues: INITIAL_FORM_STATE_SU, resolver: yupResolver(schemaSignUp) })
  const onSubmit = data => {
    console.log(data)
  }
  console.log(errors)

  return (
    <>
      <Box component='form' onSubmit={handleSubmit(onSubmit)} style={styleProps}>
        <Typography variant='h5' marginBottom='1rem'>Registrarse</Typography>
        <Controller
          name='name'
          control={control}
          render={({ field }) => (
            <TextField
              label='Nombre'
              size='small'
              variant='outlined'
              color='success'
              error={!!errors.name}
              helperText={errors.name ? errors.name?.message : ''}
              {...field}
            />
          )}
        />
        <Controller
          name='lastName'
          control={control}
          render={({ field }) => (
            <TextField
              label='Apellidos'
              size='small'
              variant='outlined'
              color='success'
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName?.message : ''}
              {...field}
            />
          )}
        />
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <TextField
              label='Email'
              size='small'
              variant='outlined'
              color='success'
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : ''}
              {...field}
            />
          )}
        />
        <Controller
          name='location'
          control={control}
          render={({ field }) => (
            <TextField
              label='Ubicación'
              size='small'
              variant='outlined'
              color='success'
              error={!!errors.location}
              helperText={errors.location ? errors.location?.message : ''}
              {...field}
            />
          )}
        />
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <TextField
              label='Contraseña'
              size='small'
              variant='outlined'
              color='success'
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : ''}
              {...field}
            />
          )}
        />
        <Controller
          name='confirmPassword'
          control={control}
          render={({ field }) => (
            <TextField
              label='Confirmar contraseña'
              size='small'
              variant='outlined'
              color='success'
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword ? errors.confirmPassword?.message : ''}
              {...field}
            />
          )}
        />
        <Button type='submit' variant='contained' sx={stylePropsButton} color='success' endIcon={<SendIcon />}>Enviar</Button>
      </Box>
    </>
  )
}

export default SignUpForm

/* Puntos a implementar:
- Necesario limpiar código, extrayendo lógica en componentes mas pequeños.
- Implementar la función onSubmit con el contexto y la llamada a la Fake API
- Estilar el formulario
 */
