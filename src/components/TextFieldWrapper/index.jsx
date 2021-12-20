import React from 'react'
import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

const TextFieldWrapper = ({ control, errors, name, label, type, stylePropsTf }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            label={label}
            type={type}
            sx={stylePropsTf}
            size='small'
            variant='outlined'
            color='success'
            error={!!errors[name]}
            helperText={errors[name] ? errors[name]?.message : ''}
            {...field}
          />
        )}
      />
    </>
  )
}

export default TextFieldWrapper
