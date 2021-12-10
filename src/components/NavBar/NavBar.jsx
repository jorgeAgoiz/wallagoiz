import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { styleProps } from './styles'

const pages = ['Favoritos', 'Subelo', 'Mensajes']
const settings = ['Perfil', 'Cuenta', 'Tus productos', 'Cerrar Sesión']
const signIn = ['Iniciar sesión', 'Registrarse']

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [logged, setLogged] = useState(true)/* Simulamos un estado de autenticacion */

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
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const userLogged = () => {
    return settings.map((setting) => (
      <MenuItem key={setting} onClick={handleCloseNavMenu}>
        <Typography textAlign='center'>{setting}</Typography>
      </MenuItem>
    ))
  }
  const userNoLogged = () => {
    return signIn.map((signInValue) => (
      <MenuItem key={signInValue} onClick={handleCloseNavMenu}>
        <Typography textAlign='center'>{signInValue}</Typography>
      </MenuItem>
    ))
  }

  return (
    <AppBar position='static' sx={styleProps}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Wallagoiz
          </Typography>
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' }
          }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Wallagoiz
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='V' src='https://i.pravatar.cc/150?img=44' />
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
  )
}
export default NavBar

/* Estoy intentando comprender el componente */
