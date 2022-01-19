import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { Grid } from '@mui/material'
import NavBar from '../NavBar'
import SearchBar from '../SearchBar'
import Home from '../../pages/Home'
import SignUp from '../../pages/SignUp'
import SignIn from '../../pages/SignIn'
import NotFound from '../../pages/NotFound'
import Account from '../../pages/Account'
import Profile from '../../pages/Profile'
import UploadArticle from '../../pages/UploadArticle'
import useUserData from '../../hooks/useUserData'
import { styleProps } from './styles'
import ArticleDetails from '../../pages/ArticleDetails'
import MyProducts from '../../pages/MyProducts'

function App () {
  const { userLog } = useUserData()

  return (
    <Grid container sx={styleProps}>
      <Router>
        <NavBar />
        <SearchBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/account' element={userLog.logged ? <Account /> : <Navigate to='/' />} />
          <Route exact path='/profile' element={userLog.logged ? <Profile /> : <Navigate to='/' />} />
          <Route exact path='/my-products' element={userLog.logged ? <MyProducts /> : <Navigate to='/' />} />
          <Route exact path='/upload' element={userLog.logged ? <UploadArticle /> : <Navigate to='/' />} />
          <Route exact path='/details/:id' element={userLog.logged ? <ArticleDetails /> : <Navigate to='/' />} />
          <Route exact path='/error' element={<NotFound />} />
        </Routes>
      </Router>
    </Grid>
  )
}

export default App
