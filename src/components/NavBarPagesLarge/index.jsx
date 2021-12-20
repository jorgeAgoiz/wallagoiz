import { Button } from '@mui/material'
import React from 'react'

const NavBarPagesLarge = ({ pages, handleCloseNavMenu }) => {
  return pages.map((page) => (
    <Button
      key={page}
      onClick={handleCloseNavMenu}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      {page}
    </Button>
  ))
}

export default NavBarPagesLarge
