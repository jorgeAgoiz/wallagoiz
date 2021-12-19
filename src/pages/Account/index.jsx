
import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Box, Button, Grid, Typography } from '@mui/material'
import { styleEmailBtn, styleProps, stylePropsSetBtn, stylePropsSettings, stylePropsTitle } from './styles'

const Account = () => {
  const { userLog } = useContext(UserContext)

  return (
    <Grid container sx={styleProps} sm={12} md={10}>
      <Grid item xs={12} sx={stylePropsTitle}>
        <Typography variant='h4'>Infomación Cuenta</Typography>
      </Grid>

      <Grid item xs={12} sx={stylePropsSettings}>
        <Box sx={stylePropsSetBtn}>
          <Box sx={styleEmailBtn}>
            <Typography variant='subtitle1'>{userLog.email}</Typography>
            <Button variant='outlined' color='warning'>Cambiar Email</Button>
          </Box>
          <Box>
            <Button variant='outlined' color='warning'>Cambiar Contraseña</Button>
          </Box>
        </Box>
        <Box>
          <Button variant='contained' color='error'>Darme de baja</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Account

/*
 Plantear las modales que se van a abrir con cada uno de los botones de la información de
cuenta.
 Limpiar los estilos, no me convencen los nombres de las variables, es muy confuso todo.   */

/* Lo dejamos aqui:
https://levelup.gitconnected.com/create-a-controlled-radio-group-in-react-formik-material-ui-and-typescript-7ed314081a0e
 */
