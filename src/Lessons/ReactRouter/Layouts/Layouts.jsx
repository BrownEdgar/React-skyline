import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { useEffect, useState } from 'react'

export default function Layouts() {
  const [isLogin, setIsLogin] = useState(Boolean(window.localStorage.getItem('login')))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsLogin(Boolean(window.localStorage.getItem('login')))
  })

  return (
    <>
      <Navbar isLogin={isLogin} />
      <Outlet />

      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloremque asperiores cumque temporibus esse! Modi vel officia doloribus, et sed blanditiis eveniet nisi vero quod amet. Cum dolores deleniti nobis!</p>
      </footer>
    </>
  )
}
