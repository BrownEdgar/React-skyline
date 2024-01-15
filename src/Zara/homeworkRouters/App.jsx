import {
  RouterProvider, createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import Layouts from './components/Layouts/Layout'
import Home from './payges/home/Home'
import Product from './payges/product/Product'
import UserPage from './payges/userpage/UserPage'
import ROUTES from './routes'
import ProductUser from './payges/productUser/ProductUser'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts/>}>
        <Route index element={<Home/>}/>
        <Route path= {ROUTES.PRODUCTUSER} element={<ProductUser/>}/>
        <Route path= {ROUTES.USERPAGE} element={<UserPage/>}/>
        <Route path= {ROUTES.PRODUCT} element={<Product/>}/>
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
