import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'
import { styleProps } from './styles'

const TextfieldWrapper = ({ name, label, customStyle, ...otherProps }) => {
  const [field, meta] = useField(name)

  const configTextField = {
    id: `outlined-${name}`,
    label: label,
    size: 'small',
    variant: 'outlined',
    ...otherProps,
    ...field,
    sx: customStyle || styleProps
  }
  if (meta && meta.touched && meta.error) {
    configTextField.error = true
    configTextField.helperText = meta.error
  }

  return (
    <>
      <TextField {...configTextField} />
    </>
  )
}

export default TextfieldWrapper
