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
import { updateUser } from '../../services/updateUser'
import { useNavigate } from 'react-router-dom'

const AccountPersonal = () => {
  const navigate = useNavigate()
  const { userLog, setUserLog } = useContext(UserContext)
  const INITIAL_VALUES = { birthday: userLog.birthday, gender: userLog.gender }

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues: INITIAL_VALUES })

  const onSubmit = async (data) => {
    const update = {
      birthday: data.birthday,
      gender: data.gender
    }
    try {
      const userUpdated = await updateUser(userLog.id, update)
      if (!userUpdated.id) {
        setError('birthday', {
          type: 'manual',
          message: 'No se ha actualizado'
        })
        return setError('gender', {
          type: 'manual',
          message: 'No se ha actualizado'
        })
      }
      delete userUpdated.password
      setUserLog({ ...userLog, ...userUpdated })
    } catch (err) {
      console.log(err)
      return navigate('/error')
      /* Gestionar este error */
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
          errors={errors}
        />
        <SelectInputWrapper
          control={control}
          name='gender'
          label='Sexo'
          stylePropsDp={stylePropsSelectInput}
          errors={errors}
        />
      </Box>
      <SubmitButton
        styles={stylePropsSubmitBtn}
        isSubmitting={isSubmitting}
        Icon={SaveIcon}
        text='Guardar'
        altText='Guardando'
      />
    </Box>
  )
}

export default AccountPersonal
