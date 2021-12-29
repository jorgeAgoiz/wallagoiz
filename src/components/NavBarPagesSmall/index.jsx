import { MenuItem, Typography } from '@mui/material'
import React from 'react'

const NavBarPagesSmall = ({ pages, handleCloseNavMenu }) => {
  return pages.map((page) => (
    <MenuItem key={page} onClick={handleCloseNavMenu}>
      <Typography textAlign='center'>{page.toUpperCase()}</Typography>
    </MenuItem>
  ))
}

export default NavBarPagesSmall
