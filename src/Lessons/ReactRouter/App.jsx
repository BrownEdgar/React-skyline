
import Navbar from './Navbar/Navbar'
import { About, Blog, Home, Post, Posts } from './pages'
import ROUTES from './routes'
import './App.scss'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom'
import Layouts from './Layouts/Layouts'
import { postsLoader } from './pages/Posts'


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.POSTS} element={<Posts />} loader={postsLoader} />
        <Route path={ROUTES.POST} element={<Post />} />
        <Route path='*' element={<Navigate to={ROUTES.HOME} />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
