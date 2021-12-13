import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

const TextfieldWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name)

  const configTextField = {
    id: 'outlined-basic',
    label: 'Outlined',
    variant: 'outlined',
    ...otherProps,
    ...field
  }
  if (meta && meta.touched && meta.error) {
    configTextField.error = true
    configTextField.helperText = meta.error
  }
  console.log(meta)

  return (
    <>
      <TextField {...configTextField} />
    </>
  )
}

export default TextfieldWrapper
