import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import ROUTES from '../routes'

export default function Signin() {
  const [isLogin] = useState(Boolean(window.localStorage.getItem('login')))
  return (
    isLogin ? <Navigate to={ROUTES.ABOUT} /> : <Outlet />
  )
}
