
import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Formik, Form } from 'formik'
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { styleProps, stylePropsButton, stylePropsForm, stylePropsPersonal, stylePropsTitle } from './styles'
import TextfieldWrapper from '../../components/TextfieldWrapper'

const Account = () => {
  const { userLog, setUserLog } = useContext(UserContext)
  const gender = 'gender'
  const birthday = 'birthday'

  return (
    <Grid container sx={styleProps} sm={12} md={10}>
      <Grid item xs={12} sx={stylePropsTitle}>
        <Typography variant='h4'>Cuenta</Typography>
      </Grid>
      <Grid item xs={12} sx={stylePropsPersonal}>
        <Typography variant='h6' textAlign='center'>Información personal</Typography>
        <Formik
          initialValues={{
            gender: userLog.gender,
            birthday: userLog.birthday
          }}
          onSubmit={(values) => {
            /* Solucionado el tema, ahora necesitamos realizar la llamada a la API para actualizar los datos */
            return setUserLog({ ...userLog, gender: values.gender, birthday: values.birthday })
          }}
        >
          {({ values, setFieldValue }) => (
            <Form style={stylePropsForm}>
              <FormControl component='fieldset'>
                <FormLabel component='legend'>Sexo</FormLabel>
                <RadioGroup
                  name={gender} value={values.gender} onChange={(event) => {
                    setFieldValue(gender, event.currentTarget.value)
                  }}
                >
                  <FormControlLabel value='hombre' control={<Radio />} label='Hombre' />
                  <FormControlLabel value='mujer' control={<Radio />} label='Mujer' />
                </RadioGroup>
              </FormControl>
              <TextfieldWrapper
                id='outlined-basic' name='birthday' label='Fecha de nacimiento' variant='outlined' value={values.birthday} onChange={(event) => {
                  setFieldValue(birthday, event.currentTarget.value)
                }}
              />
              <Box sx={stylePropsButton}>
                <Button type='submit' variant='contained' color='success' endIcon={<SendIcon />}>Enviar</Button>
              </Box>

            </Form>
          )}
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
