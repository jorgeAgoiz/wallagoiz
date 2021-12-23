import React, { useContext, useState } from 'react'
import { Box } from '@mui/system'
import { styleProps, stylePropsFieldsBox, stylePropsFields, stylePropsForm } from './styles'
import { Button, Typography } from '@mui/material'
import { UserContext } from '../../context/UserContext'
import DialogForm from '../DialogForm'

const fieldsData = [
  {
    id: 1,
    name: 'email',
    label: 'Email'
  },
  {
    id: 2,
    name: 'confirmEmail',
    label: 'Confirmar Email'
  }
]
const defaultValues = {
  email: '',
  confirmEmail: ''
}

const AccountInfo = () => {
  const { userLog } = useContext(UserContext)
  const [openEmail, setOpenEmail] = useState(false)

  const handleClickOpenEmail = () => {
    setOpenEmail(true)
  }

  const handleCloseEmail = () => {
    setOpenEmail(false)
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
              defaultValues={defaultValues}
              stylesForm={stylePropsForm}
              stylesFieldsDiv={stylePropsFields}
            />
        </Box>
  )
}

export default AccountInfo
