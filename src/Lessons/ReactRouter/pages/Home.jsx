import { Link, useOutletContext } from 'react-router-dom';
import ROUTES from '../routes';

export default function Home() {

  const login = () => {
    window.localStorage.setItem('login', true);
  }

  return (
    <div>
      <h1>Home Page</h1>

      <Link onClick={login} to={ROUTES.ABOUT}>
        Login
      </Link>
    </div>
  )
}
