import './Login.scss'

export default function Login() {

  const login = () => {
  window.localStorage.setItem('login', true)
  }
  
  const logout = () => {
    window.localStorage.removeItem("login");
  };
const initialValue = {
alarm: '', 
name: '', 
title: '', 
price: '', 
category: '', 
description: '', 
image: ''
}

  
  return (
    <div className='btnContainer'>
          <h1>Welcome Login page, if you Login you can Create or Delete items. <br /> Enjoy! </h1>
          <button className='Login__button' onClick={login}>Login</button>
          <button className='Logout__button' onClick={logout}>Logout</button>
    </div>
  );
}
