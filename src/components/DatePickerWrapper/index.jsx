import React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import { Controller } from 'react-hook-form'

const DatePickerWrapper = ({ control, name, label, stylePropsDp, errors }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            label={label}
            value={field.value}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  error={!!errors[name]}
                  helperText={errors[name] ? errors[name]?.message : ''}
                />
              )
            }}
            {...field}
          />
        )}
      />
    </LocalizationProvider>
  )
}

export default DatePickerWrapper
