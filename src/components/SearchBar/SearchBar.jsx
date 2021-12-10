import React, { useState } from 'react'
import InputBase from '@mui/material/InputBase'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import {
  stylePropsBox,
  stylePropsButton,
  stylePropsInput,
  stylePropsInputRoot
}
  from './styles'

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
