import 'server-only'

const getDict = dict => async lang => dict[lang]?.() ?? dict.en()

const comingSoonDict = {
  en: () => import('./../../dictionaries/coming-soon/en.json').then(m => m.default),
  ar: () => import('./../../dictionaries/coming-soon/ar.json').then(m => m.default)
}

export const getComingSoonDict = getDict(comingSoonDict)
