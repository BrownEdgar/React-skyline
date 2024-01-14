import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import ROUTES from "./routes";
import "./App.scss";
import {
  About,
  Comments,
  Comment,
  Home,
  Photos,
  Photo,
  Posts,
  Users,
  User,
  Error,
  Post,
  Products,
  Product,
  Editor,
} from "./pages/index";
import Layouts from "./Layouts/Layouts";
import { usersLoader } from "./pages/Users/Users";
import { postsLoader } from "./pages/Posts/Posts";
import { photosLoader } from "./pages/Photos/Photos";
import { commentsLoader } from "./pages/Comments/Comments";
import { productsLoader } from "./pages/Products/Products";
import { editorLoader } from "./pages/Editor/Editor";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.POSTS} element={<Posts />} loader={postsLoader} />
        <Route path={ROUTES.POST} element={<Post />} />
        <Route path={ROUTES.USERS} element={<Users />} loader={usersLoader} />
        <Route path={ROUTES.USER} element={<User />} />
        <Route
          path={ROUTES.PHOTOS}
          element={<Photos />}
          loader={photosLoader}
        />
        <Route path={ROUTES.PHOTO} element={<Photo />} />
        <Route
          path={ROUTES.COMMENTS}
          element={<Comments />}
          loader={commentsLoader}
        />
        <Route path={ROUTES.COMMENT} element={<Comment />} />
        <Route
          path={ROUTES.PRODUCTS}
          element={<Products />}
          loader={productsLoader}
        />
        <Route
          path={ROUTES.EDITOR}
          element={<Editor />}
          loader={editorLoader}
        />
        <Route path={ROUTES.PRODUCT} element={<Product />} />

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
