import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import EnhancedEncryptionRoundedIcon from '@mui/icons-material/EnhancedEncryptionRounded'
import NavBarPagesIcon from '../NavBarPagesIcon/NavBarPagesIcon'
import NavBarPagesExpand from '../NavBarPagesExpand/NavBarPagesExpand'
import { styleProps, stylePropsLink } from './styles'
import { avatarOne, settings, signIn } from '../../constants/index'

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [logged, setLogged] = useState(false)/* Simulamos un estado de autenticacion */
  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
    console.log(event.currentTarget)
  }
  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null)
    // Aqui controlamos la autenticación de manera provisional
    const textOption = event.target.innerText
    if (textOption === signIn[0]) {
      setLogged(true)
    }
    if (textOption === settings[3]) {
      setLogged(false)
    }
    if (textOption === signIn[1]) {
      return navigate('/signup')
    }
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  /* En caso de estar autenticado mostramos unas opciones en el menu desplegable, de lo contrario
  otras diferentes */
  const userLogged = () => {
    return settings.map((setting) => (
      <MenuItem key={setting} onClick={handleCloseNavMenu}>
        <Typography textAlign='center'>{setting}</Typography>
      </MenuItem>
    ))
  }
  const userNoLogged = () => {
    return signIn.map((signValue) => (
      <MenuItem key={signValue} onClick={handleCloseNavMenu}>
        <Typography textAlign='center'>{signValue}</Typography>
      </MenuItem>
    ))
  }

  return (
    <Grid item xs={12}>
      <AppBar position='static' sx={styleProps}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Tooltip title='Inicio'>
              <Typography
                variant='h6'
                noWrap
                component='div'
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                <Link to='/' style={stylePropsLink}>Wallagoiz</Link>
              </Typography>
            </Tooltip>

            {/* Si esta autenticado se muestra el menu de icono en pantalla pequeña, de lo contrario nada */}
            {
          logged
            ? <NavBarPagesIcon
                handleCloseNavMenu={handleCloseNavMenu}
                handleOpenNavMenu={handleOpenNavMenu}
                anchorElNav={anchorElNav}
              />
            : null
          }
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              Wallagoiz
            </Typography>
            {/* Si esta autenticado se muestran los botones en el header, de lo contario nada */}
            {
            logged
              ? <NavBarPagesExpand handleCloseNavMenu={handleCloseNavMenu} />
              : <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
          }
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* Si esta autenticado se muestra el avatar, de lo contario un Icon */}
                  {
                logged
                  ? <Avatar alt='V' src={avatarOne} />
                  : <EnhancedEncryptionRoundedIcon fontSize='large' />
                }
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {logged ? userLogged() : userNoLogged()}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Grid>

  )
}
export default NavBar
