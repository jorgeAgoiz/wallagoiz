import React, { useContext, useState } from 'react'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import DialogFormEmail from '../DialogFormEmail'
import DialogFormPassword from '../DialogFormPassword'
import { UserContext } from '../../context/UserContext'
import { styleProps, stylePropsFieldsBox } from './styles'

const AccountInfo = () => {
  const { userLog } = useContext(UserContext)
  const [openEmail, setOpenEmail] = useState(false)
  const [openPassword, setOpenPassword] = useState(false)

  /* EMAIL */
  const handleClickOpenEmail = () => {
    setOpenEmail(true)
  }
  const handleCloseEmail = (reset) => {
    setOpenEmail(false)
  }
  /* EMAIL */

  /* PASSWORD */
  const handleClickOpenPassword = () => {
    setOpenPassword(true)
  }
  const handleClosePassword = () => {
    setOpenPassword(false)
  }
  /* PASSWORD */
  return (
    <Box component='div' sx={styleProps}>
      <Typography variant='subtitle1' component='div'>
        Información Cuenta
      </Typography>
      <Box sx={stylePropsFieldsBox}>
        <Button variant='outlined' onClick={handleClickOpenEmail} color='warning'>{userLog.email}</Button>
        <Button variant='outlined' onClick={handleClickOpenPassword} color='warning'>Cambiar Contraseña</Button>
      </Box>
      <DialogFormEmail
        open={openEmail}
        handleClose={handleCloseEmail}
      />
      <DialogFormPassword
        open={openPassword}
        handleClose={handleClosePassword}
      />
    </Box>
  )
}

export default AccountInfo
