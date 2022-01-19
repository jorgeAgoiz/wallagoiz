import React from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { useNavigate } from 'react-router-dom'

const Breadcrumb = ({ category, title }) => {
  const navigate = useNavigate()

  const handleClick = (event) => {
    event.preventDefault()
  }

  return (
    <div role='presentation' onClick={handleClick}>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link
          onClick={() => navigate('/')}
          underline='hover'
          sx={{ cursor: 'pointer' }}
        >
          Inicio
        </Link>
        <Link
          onClick={() => navigate('/')}
          underline='hover'
          sx={{ cursor: 'pointer' }}
        >
          {category}
        </Link>
        <Typography color='text.primary'>{title}</Typography>
      </Breadcrumbs>
    </div>
  )
}

export default Breadcrumb
/* Hay que crear una sección de listado por categorias, hasta entonces
el segundo nivel del breadcrumb se redireccionara tambien al Home */
