import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import ROUTES from "../routes";

export default function PrivateRoute() {
  const [isLogin] = useState(Boolean(window.localStorage.getItem("login")));
  return isLogin ? <Outlet /> : <Navigate to={ROUTES.HOME} />;
}
