import React from 'react'
import Box from '@mui/material/Box'
import { pages } from '../../constants/index'
import NavBarPagesLarge from '../NavBarPagesLarge'

const NavBarPagesExpand = ({ handleCloseNavMenu }) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <NavBarPagesLarge pages={pages} handleCloseNavMenu={handleCloseNavMenu} />
    </Box>
  )
}

export default NavBarPagesExpand
