import { useLocale } from 'next-intl'
import React from 'react'
import LocaleSwitcherLang from './LocaleSwitcherLang'

function LanguageSwitch() {
  const locale = useLocale()
  return (
    <div>
      <LocaleSwitcherLang defaultValue={locale}/>
    </div>
  )
}

export default LanguageSwitch