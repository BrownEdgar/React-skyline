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
import Editor from "./pages/Editor/Editor";
import Home from "./pages/Home/Home";
import Archive from "./pages/Archive/Archive";
import Edit from "./pages/Edit/Edit";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path={ROUTES.PRODUCTS}
          element={<Products />}
          loader={productsLoader}
        />
        <Route path={ROUTES.PRODUCT} element={<Product />} />

        <Route element={<PrivateRoute />}>
          <Route path={ROUTES.ARCHIVE} element={<Archived />} />
          <Route path={ROUTES.ARCHIVES} element={<Archive />} />
          <Route path={ROUTES.ADD} element={<Add />} />
          <Route path={ROUTES.EDIT} element={<Edit />} />
          <Route path={ROUTES.EDITOR} element={<Editor />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<Login />} />

        <Route path={ROUTES.ERROR} element={<Error />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
