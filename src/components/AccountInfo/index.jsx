import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import { UserContext } from '../../context/UserContext'
import DialogForm from '../DialogForm'
import { styleProps, stylePropsFieldsBox, stylePropsFields, stylePropsForm, stylePropsTf } from './styles'
import { fieldsData } from '../../constants/index'
import { updateUser } from '../../services/updateUser'

/* Valores por defecto del Form */
const defaultValues = {
  email: '',
  confirmEmail: ''
}
/* Esquema de validación del Form */
const schemaChangeEmail = yup.object({
  email: yup.string().email().required('Requerido'),
  confirmEmail: yup.string().email().required('Requerido')
})

const AccountInfo = () => {
  const { userLog } = useContext(UserContext)
  const [openEmail, setOpenEmail] = useState(false)
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues: defaultValues, resolver: yupResolver(schemaChangeEmail) })

  const handleClickOpenEmail = () => {
    setOpenEmail(true)
  }
  const handleCloseEmail = () => {
    setOpenEmail(false)
  }

  const onSubmit = async (data) => {
    if (data.email !== data.confirmEmail) {
      return setError('confirmEmail', {
        type: 'manual',
        message: 'El Email debe coincidir.'
      })
    }
    const result = await updateUser(userLog.id, { email: data.email })
    console.log(result)
    /* Seguir aqui actualizando contexto global y manejando posibles errores trycatch */
  }

  return (
        <Box component='div' sx={styleProps}>
            <Typography variant='subtitle1' component='div'>
                Información Cuenta
            </Typography>
            <Box sx={stylePropsFieldsBox}>
              <Button variant='outlined' onClick={handleClickOpenEmail} color='warning'>{userLog.email}</Button>
              <Button variant='outlined' onClick={() => console.log('Cambiar contraseña')} color='warning'>Cambiar Contraseña</Button>
            </Box>
            <DialogForm
              open={openEmail}
              handleClickOpen={handleClickOpenEmail}
              handleClose={handleCloseEmail}
              title='Cambiar Email'
              textBtn='Modificar'
              fields={fieldsData}
              stylesForm={stylePropsForm}
              stylesFieldsDiv={stylePropsFields}
              stylePropsTf={stylePropsTf}
              control={control}
              handleSubmit={handleSubmit}
              errors={errors}
              isSubmitting={isSubmitting}
              onSubmit={onSubmit}
            />
        </Box>
  )
}

export default AccountInfo
