import React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import NavBarPagesSmall from '../NavBarPagesSmall'
import { pages } from '../../constants/index'

const NavBarPagesIcon = ({ handleCloseNavMenu, handleOpenNavMenu, anchorElNav }) => {
  return (
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
        <NavBarPagesSmall pages={pages} handleCloseNavMenu={handleCloseNavMenu} />
      </Menu>
    </Box>
  )
}

export default NavBarPagesIcon
