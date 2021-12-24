import React, { useContext, useState } from 'react'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import { UserContext } from '../../context/UserContext'
import DialogFormEmail from '../DialogFormEmail'
import { styleProps, stylePropsFieldsBox } from './styles'

const AccountInfo = () => {
  const { userLog } = useContext(UserContext)
  const [openEmail, setOpenEmail] = useState(false)
  /* const [openPassword, setOpenPassword] = useState(false) */

  /* EMAIL */
  const handleClickOpenEmail = () => {
    setOpenEmail(true)
  }
  const handleCloseEmail = (reset) => {
    setOpenEmail(false)
  }
  /* EMAIL */

  return (
        <Box component='div' sx={styleProps}>
            <Typography variant='subtitle1' component='div'>
                Información Cuenta
            </Typography>
            <Box sx={stylePropsFieldsBox}>
              <Button variant='outlined' onClick={handleClickOpenEmail} color='warning'>{userLog.email}</Button>
              <Button variant='outlined' onClick={() => console.log('Cambiar contraseña')} color='warning'>Cambiar Contraseña</Button>
            </Box>
            <DialogFormEmail
              open={openEmail}
              handleClose={handleCloseEmail}
            />
        </Box>
  )
}

export default AccountInfo
