import React, { useContext, useState } from 'react'
import { Box } from '@mui/system'
import { styleProps, stylePropsFieldsBox } from './styles'
import { Button, Typography } from '@mui/material'
import { UserContext } from '../../context/UserContext'
import DialogForm from '../DialogForm'

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
            />
        </Box>
  )
}

export default AccountInfo
