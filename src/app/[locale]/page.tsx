import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations()
  return (
    <main className='container'>{t('title')} <span className='icon-telegram'></span></main>
  )
}
