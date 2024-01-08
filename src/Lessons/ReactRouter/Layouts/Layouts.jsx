import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layouts() {

  return (
    <>
      <Navbar />
      <Outlet />

      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloremque asperiores cumque temporibus esse! Modi vel officia doloribus, et sed blanditiis eveniet nisi vero quod amet. Cum dolores deleniti nobis!</p>
      </footer>
    </>
  )
}
