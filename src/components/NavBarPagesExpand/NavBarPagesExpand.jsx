import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { pages } from '../../constants/index'

const NavBarPagesExpand = ({ handleCloseNavMenu }) => {
  return (
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
  )
}

export default NavBarPagesExpand
