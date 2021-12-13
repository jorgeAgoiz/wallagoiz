import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

const TextfieldWrapper = ({ name, label, ...otherProps }) => {
  const [field, meta] = useField(name)

  const configTextField = {
    id: 'outlined-basic',
    label: label,
    variant: 'outlined',
    ...otherProps,
    ...field
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
