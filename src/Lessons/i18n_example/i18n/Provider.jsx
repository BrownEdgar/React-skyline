import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'
import LOCALES from './locale'
import messages from './messages'

export default function Provider({ children, locale = LOCALES.ENGLISH }) {
  return (
    <IntlProvider
      locale={locale}
      textComponent={Fragment}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  )
}

