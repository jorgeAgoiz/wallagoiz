import React, { useState } from 'react'
import { Grid } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import {
  stylePropsBox,
  stylePropsButton,
  inputPropsInput,
  stylePropsInputRoot
}
  from './styles'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState(null)

  const onHandleChange = (evt) => {
    setSearch(evt.target.value)
  }

  const onHandleSubmit = (evt) => {
    evt.preventDefault()
    return navigate(`/results/${search}`)
  }

  return (
    <Grid item xs={12} sm={11} md={9} lg={7}>
      <Box sx={stylePropsBox} component='form' name='search-form' onSubmit={onHandleSubmit}>
        <InputBase sx={stylePropsInputRoot} inputProps={inputPropsInput} onChange={onHandleChange} />
        <Button variant='contained' size='small' type='submit' sx={stylePropsButton}>
          Busqueda
        </Button>
      </Box>
    </Grid>

  )
}

export default SearchBar
