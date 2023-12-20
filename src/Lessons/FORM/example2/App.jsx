import React, { useRef, useState } from 'react'

export default function App() {
  const [checked, setChecked] = useState(false);
  const [emailValue, setEmailValue] = useState("")
  const [usersEmails, setUsersEmails] = useState([
    "exaple@gmail.com",
    "exaple2@gmail.com",
    "exaple3@gmail.com",
    "exaple4@gmail.com",
    "exaple5@gmail.com",
    "exaple6@gmail.com",
  ])
  const [errorMessage, setErrorMessage] = useState('')

  const inputRef = useRef(null); // {current: null}



  const handleChange = () => {
    setChecked(inputRef.current?.checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsersEmails([...usersEmails, emailValue]);
    e.target.reset();
    setEmailValue('')
    errorMessage('')

  }

  const handleEmailChange = (e) => {

    const result = usersEmails.some(email => email === e.target.value.toLowerCase())
    if (result) {
      setErrorMessage('this email is alredy used!')
    } else {
      setErrorMessage('')
    }
    setEmailValue(e.target.value)
  }



  return (
    <div className='App'>

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder='Enter Email...'
          onBlur={handleEmailChange}
        />
        <p className="error">
          {errorMessage ? errorMessage : ""}
        </p>
        <p>
          <input
            type="checkbox"
            id='policy'
            ref={inputRef}
            onChange={handleChange}
          />
          <label htmlFor="policy">I agree</label>
        </p>
        <input type="submit" disabled={!checked || errorMessage || !emailValue} />
      </form>
    </div>
  )
}
