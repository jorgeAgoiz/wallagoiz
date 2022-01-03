import * as React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { Controller } from 'react-hook-form'

/* import IconButton from '@mui/material/IconButton'
import PhotoCamera from '@mui/icons-material/PhotoCamera' */

const Input = styled('input')({
  display: 'none'
})

const InputFileWrapper = ({ text, styles, name, control, errors }) => {
  /* const onHandleFile = (evt) => {

    console.log(evt.target.value)
  } */

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <label htmlFor='contained-button-file' style={styles}>
            <Input
              name={name}
              accept='image/*'
              id='contained-button-file'
              type='file'
              error={!!errors[name]}
              helperText={errors[name] ? errors[name]?.message : ''}
              /* {...field} */
            />
            <Button variant='contained' component='span'>
              {text}
            </Button>
          </label>
        )}
      />
    </>
  )
}

export default InputFileWrapper
