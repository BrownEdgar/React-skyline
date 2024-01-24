import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import ROUTES from '../routes'

export default function PrivateRoutes() {
  const [isLogin] = useState(Boolean(window.localStorage.getItem('login')))
  return (
    isLogin ? <Outlet /> : <Navigate to={ROUTES.HOME} />
  )
}
