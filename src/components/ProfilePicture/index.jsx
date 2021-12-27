import React, { useContext } from 'react'
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

  return (
    <>
      <Box sx={stylePropsProfilePic}>
        <Typography variant='subtitle1'>
          Foto de perfil
        </Typography>
        <Avatar alt='Profile Pic' src={avatarPic} sx={stylePropsAvatarPic}>{emptyAvatarPic(userLog)}</Avatar>
        <InputFileWrapper />
      </Box>
    </>
  )
}

export default ProfilePicture
