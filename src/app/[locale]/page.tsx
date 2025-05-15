import { useTranslations } from 'next-intl';
import { CategoriesSectionLazy } from '@widgets';

export default function Home() {
  const t = useTranslations('')

  const categories = [
    {
      title: 'Categpry',
      link: '#!'
    }
  ]

  return (
    <main>
      <CategoriesSectionLazy
        title={t('popular_category')}
        link={t('all')}
        categoriesList={categories}
      />
    </main>
  )
}
