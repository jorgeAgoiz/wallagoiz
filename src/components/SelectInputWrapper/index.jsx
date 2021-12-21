import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

const SelectInputWrapper = ({ control, name, label, stylePropsDp }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) =>
        <FormControl>
          <InputLabel id='demo-simple-select-label'>Age</InputLabel>
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
        </FormControl>}
    />
  )
}

export default SelectInputWrapper
