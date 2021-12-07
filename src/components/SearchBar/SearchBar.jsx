import React from 'react'
import InputBase from '@mui/material/InputBase'
import { Box } from '@mui/material'

const styleProps = {
  gridColumn: '2 / 6',
  backgroundColor: '#d0e7b7',
  boxShadow: 4,
  borderRadius: 3,
  display: 'flex',
  justifyContent: 'center'
}

const SearchBar = () => {
  return (
    <Box sx={styleProps}>
      <InputBase placeholder='Buscar...' />
    </Box>
  )
}

export default SearchBar

/* Seguiremos aqui estilando la barra de busqueda */
