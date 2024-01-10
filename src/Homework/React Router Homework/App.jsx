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
  Home,
  Photos,
  Posts,
  Users,
  User,
  Error,
  Post,
} from "./pages/index";
import Layouts from "./Layouts/Layouts";
import { usersLoader } from './pages/Users/Users';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.POSTS} element={<Posts />} />
        <Route path={ROUTES.POST} element={<Post />} />
        <Route path={ROUTES.USERS} element={<Users />} loader={usersLoader} />
        <Route path={ROUTES.USER} element={<User />} />
        <Route path={ROUTES.PHOTOS} element={<Photos />} />
        <Route path={ROUTES.COMMENT} element={<Comments />} />
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
