import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import Layouts from './components/Layouts/Layouts'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import ROUTES from './routes'
import Product from './pages/Product/Product'

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.PRODUCT} element={<Product />} />
      </Route>
    )
  )


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}


