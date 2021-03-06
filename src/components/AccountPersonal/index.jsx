import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import SaveIcon from '@mui/icons-material/Save'
import SubmitButton from '../SubmitButton'
import DatePickerWrapper from '../DatePickerWrapper'
import SelectInputWrapper from '../SelectInputWrapper'
import { updateUser } from '../../services/updateUser'
import { UserContext } from '../../context/UserContext'
import { options } from '../../constants'
import {
  styleProps,
  stylePropsFieldsBox,
  stylePropsSelectInput,
  stylePropsSubmitBtn
}
  from './styles'

const AccountPersonal = () => {
  /* global sessionStorage */
  const token = sessionStorage.getItem('token')
  const navigate = useNavigate()
  const { userLog, setUserLog } = useContext(UserContext)
  const INITIAL_VALUES = {
    birthday: userLog.birthday || null,
    gender: userLog.gender || null
  }

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
      const userUpdated = await updateUser({ fields: update, token })
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
      /* Aqui podemos implementar algun tipo de confirmación */
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
          items={options}
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
