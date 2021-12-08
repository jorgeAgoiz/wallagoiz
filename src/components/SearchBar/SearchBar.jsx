import React, { useState } from 'react'
import InputBase from '@mui/material/InputBase'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const stylePropsBox = {
  gridColumn: '2 / 6',
  backgroundColor: '#d0e7b7',
  boxShadow: 4,
  borderRadius: 3,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 0.8,
  width: '100%'
}
const stylePropsInputRoot = {
  width: '50%'
}
const stylePropsInput = {
  placeholder: 'Buscar...',
  type: 'text',
  name: 'search'
}
const stylePropsButton = {
  backgroundColor: '#79955a'
}

const SearchBar = () => {
  const [search, setSearch] = useState(null)

  const onHandleChange = (evt) => {
    setSearch(evt.target.value)
  }

  const onHandleSubmit = (evt) => {
    evt.preventDefault()
    console.log(search)
  }

  return (
    <Box sx={stylePropsBox} component='form' name='search-form' onSubmit={onHandleSubmit}>
      <InputBase sx={stylePropsInputRoot} inputProps={stylePropsInput} onChange={onHandleChange} />
      <Button variant='contained' size='small' type='submit' sx={stylePropsButton}>
        Busqueda
      </Button>
    </Box>
  )
}

export default SearchBar

/* Seguiremos aqui estilando la barra de busqueda */
