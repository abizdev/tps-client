import { useTranslations } from 'next-intl';
import { CategoriesSectionLazy } from '@widgets/categories-section';

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
      <CategoriesSectionLazy
        title={t('best_category_for_man')}
        link={t('all')}
        categoriesList={categories}
      />
    </main>
  )
}
