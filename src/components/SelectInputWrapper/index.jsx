import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

const SelectInputWrapper = ({ control, name, label, stylePropsDp, errors }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) =>
        <FormControl error={!!errors[name]}>
          <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={field.value}
            label={label}
            sx={stylePropsDp}
            {...field}
          >
            <MenuItem value='male'>Hombre</MenuItem>
            <MenuItem value='female'>Mujer</MenuItem>
          </Select>
          <FormHelperText>{errors[name] ? errors[name]?.message : ''}</FormHelperText>
        </FormControl>}
    />
  )
}

export default SelectInputWrapper
