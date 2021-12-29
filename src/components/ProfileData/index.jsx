import React, { useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { Box } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import TextFieldWrapper from '../TextFieldWrapper'
import SubmitButton from '../SubmitButton'
import { styleProps, stylePropsTf } from './styles'
import { UserContext } from '../../context/UserContext'
import { updateUser } from '../../services/updateUser'
import { useNavigate } from 'react-router-dom'

const schemaProfileInfo = yup.object({
  name: yup.string().required('Requerido'),
  lastName: yup.string().required('Requerido'),
  location: yup.string().required('Requerido')
})

const ProfileData = () => {
  const navigate = useNavigate()
  const { userLog, setUserLog } = useContext(UserContext)
  const INITIAL_VALUES = {
    name: userLog.name,
    lastName: userLog.lastName,
    location: userLog.location
  }
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues: INITIAL_VALUES, resolver: yupResolver(schemaProfileInfo) })

  const onSubmit = async (data) => {
    try {
      const updatedUser = await updateUser(userLog.id, data)
      if (!updatedUser.id) {
        setError('name', {
          type: 'manual',
          message: 'No se ha actualizado'
        })
        setError('lastName', {
          type: 'manual',
          message: 'No se ha actualizado'
        })
        setError('location', {
          type: 'manual',
          message: 'No se ha actualizado'
        })
      }
      delete updatedUser.password
      setUserLog({ logged: true, ...updatedUser })
    } catch (err) {
      console.log(err)
      return navigate('/error')
    }
  }

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={styleProps}>
      <TextFieldWrapper control={control} errors={errors} name='name' label='Nombre' stylePropsTf={stylePropsTf} />
      <TextFieldWrapper control={control} errors={errors} name='lastName' label='Apellidos' stylePropsTf={stylePropsTf} />
      <TextFieldWrapper control={control} errors={errors} name='location' label='Ubicación' stylePropsTf={stylePropsTf} />
      <SubmitButton isSubmitting={isSubmitting} text='Guardar' altText='Guardando' Icon={SaveIcon} />
    </Box>
  )
}

export default ProfileData
