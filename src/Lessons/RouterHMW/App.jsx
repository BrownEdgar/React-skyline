import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./NavBar/NavBar";
import { ErrorPage, Home, Jazz, Other, Rap, Reggae, Rock } from "./pages";
import ROUTES from "./routes";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.RAP_ARTISTS} element={<Rap />} />
        <Route path={ROUTES.REGGAE_ARTISTS} element={<Reggae />} />
        <Route path={ROUTES.ROCK_ARTISTS} element={<Rock />} />
        <Route path={ROUTES.JAZZ_ARTISTS} element={<Jazz />} />
        <Route path={ROUTES.OTHER_ARTISTS} element={<Other />} />
        <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
    </div>
  );
}
