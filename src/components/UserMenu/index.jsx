import { MenuItem, Typography } from '@mui/material'
import React from 'react'

const UserMenu = ({ settings, handleCloseNavMenu }) => {
  return settings.map((setting) => (
    <MenuItem key={setting} onClick={handleCloseNavMenu}>
      <Typography textAlign='center'>{setting}</Typography>
    </MenuItem>
  ))
}

export default UserMenu
