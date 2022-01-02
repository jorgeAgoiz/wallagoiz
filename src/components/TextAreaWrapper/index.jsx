import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { Controller } from 'react-hook-form'

const TextAreaWrapper = ({
  control,
  errors,
  name,
  label,
  defaultValue,
  stylePropsTf,
  ...otherProps
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextareaAutosize
            placeholder='Descripción del producto...'
            style={stylePropsTf}
            error={!!errors[name]}
            helperText={errors[name] ? errors[name]?.message : ''}
            {...field}
          />
        )}
      />
    </>

  )
}

export default TextAreaWrapper
