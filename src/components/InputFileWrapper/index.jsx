import * as React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
/* import IconButton from '@mui/material/IconButton'
import PhotoCamera from '@mui/icons-material/PhotoCamera' */

const Input = styled('input')({
  display: 'none'
})

const InputFileWrapper = () => {
  const onHandleFile = (evt) => {
    /* Función para manejar el envio  */
    console.log(evt.target.value)
  }

  return (
    <>
      <label htmlFor='contained-button-file'>
        <Input accept='image/*' id='contained-button-file' type='file' onChange={onHandleFile} />
        <Button variant='contained' component='span'>
          Cambiar
        </Button>
      </label>
    </>
  )
}

export default InputFileWrapper
