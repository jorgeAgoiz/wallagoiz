import React from 'react'
import { useForm } from 'react-hook-form'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import SaveIcon from '@mui/icons-material/Save'
import SubmitButton from '../SubmitButton'
import {
  styleProps,
  stylePropsFieldsBox,
  stylePropsSelectInput,
  stylePropsSubmitBtn
}
  from './styles'
import DatePickerWrapper from '../DatePickerWrapper'
import SelectInputWrapper from '../SelectInputWrapper'

const AccountPersonal = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues: { birthday: null, gender: '' } })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={styleProps}>
      <Typography variant='subtitle1' component='div'>
        Información Personal
      </Typography>
      <Box sx={stylePropsFieldsBox}>
        <DatePickerWrapper
          control={control}
          name='birthday'
          label='Fecha de Nacimiento'
        />
        <SelectInputWrapper
          control={control}
          name='gender'
          label='Sexo'
          stylePropsDp={stylePropsSelectInput}
        />
      </Box>
      <SubmitButton
        styles={stylePropsSubmitBtn}
        isSubmitting={isSubmitting}
        Icon={SaveIcon}
        text='Guardar'
      />
    </Box>
  )
}

export default AccountPersonal
/*  - Añadir la validación y gestión de errores
    - Darle funcionalidad al onSubmit
    */
