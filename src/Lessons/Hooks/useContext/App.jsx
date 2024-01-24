import { useState } from 'react'
import { MyContext } from './utils/Context';
import A from './A'

import './App.scss'

export default function App() {
  const [theme, setTheme] = useState('dark');
  const handleChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div>
      <h1>App Component</h1>
      <MyContext.Provider value={{
        data: theme,
        changeTheme: setTheme
      }}>
        <A />
      </MyContext.Provider>
      <button onClick={handleChange}>toggle theme</button>
    </div>
  )
}
