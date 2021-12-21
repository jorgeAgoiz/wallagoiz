import React from 'react'
import { useForm } from 'react-hook-form'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import SaveIcon from '@mui/icons-material/Save'
import SubmitButton from '../SubmitButton'
import TextFieldWrapper from '../TextFieldWrapper'
import { styleProps, stylePropsFieldsBox } from './styles'

const AccountPersonal = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues: { birthday: '', gender: '' } })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={styleProps}>
      <Typography variant='subtitle2' component='div'>
        Información Personal
      </Typography>
      <Box sx={stylePropsFieldsBox}>
        <TextFieldWrapper
          control={control}
          errors={errors}
          name='birthday'
          label='Fecha de Nacimiento'
        />
        <TextFieldWrapper
          control={control}
          errors={errors}
          name='birthday'
          label='Fecha de Nacimiento'
        />
      </Box>
      <SubmitButton
        isSubmitting={isSubmitting}
        Icon={SaveIcon}
        text='Guardar'
      />
    </Box>
  )
}

export default AccountPersonal
/* Sustituir los TextFields, por un Date Picker y por un selector input radio */
