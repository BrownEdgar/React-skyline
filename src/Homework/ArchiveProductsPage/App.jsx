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

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.PRODUCTS} element={<Layout />}>
        <Route index element={<Products />} loader={productsLoader} />
        <Route path={ROUTES.PRODUCT} element={<Product />} />
        <Route path={ROUTES.ARCHIVE} element={<Archived />} />
        <Route path={ROUTES.ADD} element={<Add />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
