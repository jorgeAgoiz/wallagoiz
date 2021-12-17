
import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { Formik, Form } from 'formik'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { styleProps, stylePropsButton, stylePropsForm, stylePropsPersonal, stylePropsTitle, stylePropsBoxBtn } from './styles'
import TextfieldWrapper from '../../components/TextfieldWrapper'

/* const VALIDATION_SCHEMA = {

} */

const Account = () => {
  const { userLog } = useContext(UserContext)

  return (
    <Grid container sx={styleProps} sm={12} md={10}>
      <Grid item xs={12} sx={stylePropsTitle}>
        <Typography variant='h4'>Cuenta</Typography>
      </Grid>
      <Grid item xs={12} sx={stylePropsPersonal}>
        <Typography variant='h6' textAlign='center'>Información personal</Typography>
        <Formik
          initialValues={{ gender: '', birthday: userLog.birthday }}
          validationSchema={VALIDATION_SCHEMA}
          onSubmit={(values) => console.log(values)}
        >
          <Form style={stylePropsForm}>
            <TextfieldWrapper name='birthday' label='Fecha de nacimiento' />
            <FormControl name='gender'>
              <InputLabel id='demo-simple-select-label'>Age</InputLabel>
              <Select
                name='gender'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                defaultValue='hombre'
                label='Age'
                onChange={(evt) => console.log(evt.target.value)}
              >
                <MenuItem value='hombre'>Hombre</MenuItem>
                <MenuItem value='mujer'>Mujer</MenuItem>
              </Select>
            </FormControl>

            <Box sx={stylePropsBoxBtn}>
              <Button type='submit' variant='contained' sx={stylePropsButton} color='success' endIcon={<SendIcon />}>Guardar</Button>
            </Box>
          </Form>
        </Formik>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6'>Información cuenta</Typography>
      </Grid>
    </Grid>
  )
}

export default Account

/* Lo dejamos aqui:
https://levelup.gitconnected.com/create-a-controlled-radio-group-in-react-formik-material-ui-and-typescript-7ed314081a0e
 */
