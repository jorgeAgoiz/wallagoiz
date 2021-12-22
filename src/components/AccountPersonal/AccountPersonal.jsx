import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../context/UserContext'
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
import { convertDate } from '../../utils/convertDate'
import { updateUser } from '../../services/updateUser'

const AccountPersonal = () => {
  const { userLog, setUserLog } = useContext(UserContext)
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues: { birthday: null, gender: '' } })

  const onSubmit = async (data) => {
    const birthdayString = convertDate({ date: data.birthday })
    const update = {
      birthday: birthdayString,
      gender: data.gender
    }
    try {
      const result = await updateUser(userLog.id, update)
      console.log(result)
    } catch (err) {
      console.log(err)
    }
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
    - Decidir que se hace con la respuesta del fetch, necesito el status
    */
