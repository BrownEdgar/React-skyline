import { About, Blog, Home, Post, Posts } from './pages'
import ROUTES from './routes'
import './App.scss'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom'
import Layouts from './Layouts/Layouts'
import { postsLoader } from './pages/Posts'
import PrivateRoutes from './PrivateRoutes/PrivateRoutes'
import Signin from './SignIn/SighnIn'


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route element={<Signin />}>
          <Route index element={<Home />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.POSTS}>
            <Route index element={<Posts />} loader={postsLoader} />
            <Route path=':postid' element={<Post />} />
          </Route>
        </Route>

        <Route path='*' element={<Navigate to={ROUTES.ABOUT} />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
