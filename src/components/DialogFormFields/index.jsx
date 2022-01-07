import React from 'react'
import TextFieldWrapper from '../TextfieldWrapper'

const DialogFormFields = ({ data, control, errors, stylePropsTf, type }) => {
  return data.map((field) => {
    return (
      <TextFieldWrapper
        key={field.id}
        control={control}
        errors={errors}
        name={field.name}
        label={field.label}
        type={type}
        stylePropsTf={stylePropsTf}
        autoFocus
        margin='dense'
      />
    )
  }
  )
}

export default DialogFormFields
