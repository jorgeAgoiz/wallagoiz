import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { Box } from '@mui/system'
import InputFileWrapper from '../InputFileWrapper'
import { emptyAvatarPic } from '../../utils/createAvatar'
import { UserContext } from '../../context/UserContext'
import { stylePropsProfilePic, stylePropsAvatarPic } from './styles'
import avatarPic from '../../images/julian-wan.jpg'// Foto de perfil de prueba

const ProfilePicture = () => {
  const { userLog } = useContext(UserContext)
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm()

  /* Tenemos que darle solución a esto, ahora mismo no funciona, es solo visual */

  return (
    <Box sx={stylePropsProfilePic}>
      <Typography variant='subtitle1'>
        Foto de perfil
      </Typography>
      <Avatar alt='Profile Pic' src={avatarPic} sx={stylePropsAvatarPic}>{emptyAvatarPic(userLog)}</Avatar>
      <InputFileWrapper
        text='cambiar'
        name='profilePic'
        control={control}
        errors={errors}
      />
    </Box>
  )
}

export default ProfilePicture

/* Aqui hay que traabajar bastante para darle funcionalidad */
