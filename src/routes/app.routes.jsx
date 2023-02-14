import { Routes, Route } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { Preview } from '@/pages/Preview'
import { Profile } from '@/pages/Profile'
import { SignIn } from '@/pages/SignIn'
import { SignUp } from '@/pages/SignUp'
import { NewMovie } from '@/pages/NewMovie'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/preview' element={<Preview />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/create' element={<NewMovie />} />
    </Routes>
  )
}
