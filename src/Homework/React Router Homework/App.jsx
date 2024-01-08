import React from "react";
import Navbar from "./navbar/Navbar";
import About from "./pages/About/About";
import Posts from "./pages/Posts/Posts";
import Photos from "./pages/Photos/Photos";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Comments from "./pages/Comments/Comments";

import { Routes, Route } from "react-router-dom";

import ROUTES from "./routes";
import "./App.scss";
import Users from "./pages/Users/Users";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.POSTS} element={<Posts />} />
        <Route path={ROUTES.USERS} element={<Users />} />
        <Route path={ROUTES.PHOTOS} element={<Photos />} />
        <Route path={ROUTES.COMMENT} element={<Comments />} />
        <Route path={ROUTES.ERROR} element={<Error />} />
      </Routes>
    </div>
  );
}
