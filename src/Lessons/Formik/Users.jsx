import React, { useEffect, useState } from 'react'

import './Users.scss'
import classNames from 'classnames'

export default function Users({ languages, users }) {

  const [currentLanguage, setCurrentLanguage] = useState('all')

  useEffect(() => {
    setCurrentLanguage('all')
  }, [users.length])


  const updateIndex = (language) => {
    setCurrentLanguage(language)
  }
  return (
    <div className={classNames("Users")}>
      <div className="Users__buttons">
        <button className={classNames('Users__button', {
          'Users__button-active': 'all' === currentLanguage
        })} onClick={() => {
          updateIndex('all')
        }}>all</button>
        {
          languages.map(language => {
            return <button
              key={language}
              className={classNames('Users__button', {
                'Users__button-active': language === currentLanguage
              })}
              onClick={() => {
                updateIndex(language)
              }}
            >{language}
            </button>
          })
        }
      </div>
      <div className='Users__flex'>
        {users.map(user => {
          if (currentLanguage === 'all' || user.language === currentLanguage) {
            return (
              <div className='Users__card' key={user.id}>
                <h3>username: {user.username}</h3>
                <h3>Email: {user.email}</h3>
                <h3>language: {user.language}</h3>
              </div>
            )
          }

        })}
      </div>
    </div>
  )
}
