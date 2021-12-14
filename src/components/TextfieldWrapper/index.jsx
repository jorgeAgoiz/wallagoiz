import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'
import { styleProps } from './styles'

const TextfieldWrapper = ({ name, label, ...otherProps }) => {
  const [field, meta] = useField(name)

  const configTextField = {
    id: `outlined-${name}`,
    label: label,
    size: 'small',
    variant: 'outlined',
    ...otherProps,
    ...field,
    sx: styleProps
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
