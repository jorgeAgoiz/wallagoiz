import React from 'react'
import { Controller } from 'react-hook-form'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'

const SelectInputWrapper = ({ control, name, label, stylePropsDp, errors, items }) => {
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
            {
              items.map((item, index) => {
                return <MenuItem key={index} value={item.name}>{item.label}</MenuItem>
              })
            }
          </Select>
          <FormHelperText>{errors[name] ? errors[name]?.message : ''}</FormHelperText>
        </FormControl>}
    />
  )
}

export default SelectInputWrapper
