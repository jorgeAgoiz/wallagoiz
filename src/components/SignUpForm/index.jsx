import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Box, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import TextFieldWrapper from '../TextfieldWrapper'
import SubmitButton from '../SubmitButton'
import { INITIAL_FORM_STATE_SU } from '../../constants'
import { createUser } from '../../services/createUser'
import { styleProps, stylePropsBox, stylePropsButton, stylePropsTf } from './styles'

const schemaSignUp = yup.object({
  name: yup.string().required('Requerido'),
  lastName: yup.string().required('Requerido'),
  email: yup.string().email().required('Requerido'),
  location: yup.string().required('Requerido'),
  password: yup.string().min(5, 'Mínimo 5 caracteres').required('Requerido'),
  confirmPassword: yup.string().min(5, 'Mínimo 5 caracteres').required('Requerido')
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
      if (err.code === 406) {
        return setError('email', {
          type: 'manual',
          message: 'Email en uso.'
        })
      }
      return navigate('/error')
    }
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
        <SubmitButton
          styles={stylePropsButton}
          isSubmitting={isSubmitting}
          Icon={SendIcon}
          text='Registrarse'
          altText='Registrando'
        />
      </Box>
    </>
  )
}

export default SignUpForm
