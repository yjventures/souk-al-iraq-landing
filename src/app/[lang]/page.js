import ComingSoon from '@/components/pages/comming-soon'
import { getComingSoonDict } from '@/utils/i18n/get-dictionary'

export const metadata = {
  title: 'Souk Al Iraq | Coming Soon...'
}

export default async function Home({ params: { lang } }) {
  const t = await getComingSoonDict(lang)
  return <ComingSoon t={t} />
}
