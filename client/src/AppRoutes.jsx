import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgetPassword from './pages/auth/ForgetPassword'


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path='/login' element={<Login />} />
      
      <Route path='/register' element={<Register/>} />
        
      <Route path='/forget-password' element={<ForgetPassword />} />
      <Route path="*" element={<div>404 - Page not found</div>} />
      </Routes>
  )
}
