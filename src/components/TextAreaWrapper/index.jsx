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
            helpertext={errors[name] ? errors[name]?.message : ''}
            {...field}
          />
        )}
      />
    </>

  )
}

export default TextAreaWrapper

/*
Solucionar Error:

react_devtools_backend.js:4045 Warning: Received `false` for a non-boolean attribute `error`.

If you want to write it to the DOM, pass a string instead: error="false" or error={value.toString()}.

If you used to conditionally omit it with error={condition && value}, pass error={condition ? value : undefined} instead.
*/
