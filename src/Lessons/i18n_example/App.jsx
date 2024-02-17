import React, { useState } from 'react'
import LOCALES from './i18n/locale'
import Translate from './i18n/Translate'
import I18nProvider from './i18n/Provider'

import './App.scss';

export default function App() {
  const [language, setLanguage] = useState(LOCALES.ENGLISH)
  const changelanguage = (e) => {
    console.log(e.target.value)
    setLanguage(LOCALES[e.target.value])
  }

  return (
    <I18nProvider locale={language}>
      <div className='App'>
        <select name="languages" id="languages" onChange={changelanguage}>
          <option value="ENGLISH">en</option>
          <option value="RUSSIAN">ru</option>
          <option value="ARM">am</option>
        </select>
        <div className="content">
          <h2>
            <Translate id='title' value={{ path: 'version ^18.2.0' }} />
          </h2>
          <p>
            <Translate id='description' />
          </p>
          <button>
            <Translate id='btnText' />
          </button>
        </div>
      </div>
    </I18nProvider>
  )
}
