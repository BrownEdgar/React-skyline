import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ROUTES from "../Routes";
import Layouts from "./Components/Layouts/Layouts";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Product from "./Pages/Products/Product/Product";
import Login from "./Pages/Login/Login";
import './App.scss'
import Products from "./Pages/Products/Products";
import Create from "./Pages/Products/Create/Create";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.PRODUCT} element={<Product />} />
        <Route path={ROUTES.CREATE} element={<Create />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
