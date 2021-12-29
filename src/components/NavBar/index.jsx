import React, { useContext, useState } from 'react'
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
import EnhancedEncryptionRoundedIcon from '@mui/icons-material/EnhancedEncryptionRounded'
import NavBarPagesIcon from '../NavBarPagesIcon'
import NavBarPagesExpand from '../NavBarPagesExpand'
import { settings, signIn, pages } from '../../constants/index'
import { UserContext, userDataState } from '../../context/UserContext'
import { emptyAvatarPic } from '../../utils/createAvatar'
import { styleProps, stylePropsLink } from './styles'
import UserMenu from '../UserMenu'
import AlertDialog from '../BasicDialog'

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const { userLog, setUserLog } = useContext(UserContext)
  const navigate = useNavigate()
  // Estado y funciones Modal
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleLogOut = () => {
    setUserLog(userDataState)
    /* global sessionStorage */
    sessionStorage.clear()
    setOpen(false)
    return navigate('/')
  }
  // ************************

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null)
    /* N3 - Esto hay que darle otro enfoque:
      - Modal de confirmación para cerrar sesión
      - Extraer esta lógica en una función aislada.
      - Hacer aqui la limpieza del storage.
    */

    const textOption = event.target.innerText
    if (textOption === pages[1].toUpperCase()) {
      return navigate('/upload')
    }
    if (textOption === signIn[0]) {
      return navigate('/signin')
    }
    if (textOption === signIn[1]) {
      return navigate('/signup')
    }
    if (textOption === settings[3]) {
      handleClickOpen()
    }
    if (textOption === settings[1]) {
      return navigate('/account')
    }
    if (textOption === settings[0]) {
      return navigate('/profile')
    }
    // *****************************************************
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
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
            {
          userLog.logged &&
            <NavBarPagesIcon
              handleCloseNavMenu={handleCloseNavMenu}
              handleOpenNavMenu={handleOpenNavMenu}
              anchorElNav={anchorElNav}
            />
          }
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <Link to='/' style={stylePropsLink}>Wallagoiz</Link>
            </Typography>
            {
            userLog.logged
              ? <NavBarPagesExpand handleCloseNavMenu={handleCloseNavMenu} />
              : <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
          }
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open Settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {
                userLog.logged // N6 - En función de si existe o no foto de perfil tendremos que modificar esto
                  ? <Avatar alt='Profile Pic'>{emptyAvatarPic(userLog)}</Avatar>
                  : <EnhancedEncryptionRoundedIcon fontSize='large' /> // **********************************
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
                {
                  userLog.logged
                    ? <UserMenu settings={settings} handleCloseNavMenu={handleCloseNavMenu} />
                    : <UserMenu settings={signIn} handleCloseNavMenu={handleCloseNavMenu} />
                }
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <AlertDialog
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        handleLogOut={handleLogOut}
      />
    </Grid>

  )
}
export default NavBar
