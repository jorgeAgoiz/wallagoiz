import * as React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { Input } from '@mui/material'
import { Controller } from 'react-hook-form'
import PhotoCamera from '@mui/icons-material/PhotoCamera'

const InputMUI = styled(Input)({
  display: 'none'
})
/* Gestionar la visibilidad de errores */

const InputFileWrapper = ({ text, styles, name, control, errors }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <label htmlFor='contained-button-file' style={styles}>
            <InputMUI
              accept='image/*'
              id='contained-button-file'
              type='file'
              error={!!errors[name]}
              helpertext={errors[name] ? errors[name]?.message : ''}
              onChange={e => field.onChange(e.target.files)}
              {...field}
            />
            <Button variant='contained' component='span' endIcon={<PhotoCamera />}>
              {text}
            </Button>
          </label>
        )}
      />
    </>
  )
}

export default InputFileWrapper
