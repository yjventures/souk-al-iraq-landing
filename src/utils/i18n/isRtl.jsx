'use client'

import { getLocaleLang } from './get-locale-lang'

export const isRtl = () => {
  if (getLocaleLang() === 'ar') return true
  return false
}
