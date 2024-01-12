import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import { About, Blog, ErrorPage, Home, Posts } from './pages'
import ROUTES from './routes'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.POSTS} element={<Posts />} />
        <Route path='*' element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
    </div>
  )
}
