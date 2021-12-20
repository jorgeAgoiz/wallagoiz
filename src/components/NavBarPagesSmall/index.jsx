import { MenuItem, Typography } from '@mui/material'
import React from 'react'

const NavBarPagesSmall = ({ pages, handleCloseNavMenu }) => {
  return pages.map((page) => (
    <MenuItem key={page} onClick={handleCloseNavMenu}>
      <Typography textAlign='center'>{page}</Typography>
    </MenuItem>
  ))
}

export default NavBarPagesSmall
