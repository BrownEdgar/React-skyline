import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ROUTES from "./routes";
import Layout from "./Layout/Layout";
import Products, { productsLoader } from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Add from "./pages/Add/Add";
import Archived from "./pages/Archived/Archived";
import "./App.scss";
import Login from "./pages/Login/Login";
import PrivateRoute from "./Private/PrivateRoute";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.PRODUCTS} element={<Layout />}>
        <Route index element={<Products />} loader={productsLoader} />
        <Route path={ROUTES.PRODUCT} element={<Product />} />
        <Route element={<PrivateRoute />}>
          <Route path={ROUTES.ARCHIVE} element={<Archived />} />
          <Route path={ROUTES.ADD} element={<Add />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
