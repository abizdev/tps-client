import React from 'react';
import { ProductsSectionLazy } from '@widgets/products-section';

import { useTranslations } from 'next-intl';

const Page: React.FC = () => {
  const tEmpty = useTranslations('empty_content');
  const tSaved = useTranslations('saved');

  const products: [] = []
  // const products = [
  //   {
  //     id: Math.random(),
  //     title: "Product name",
  //     name: "Miraculum духи Byc Moze... Paris Parfume",
  //     price: 184000,
  //     discount: 184000,
  //     linkUrl: "#!",
  //     rating: 5,
  //     count: 20,
  //     isLiked: true,
  //     images: [
  //       {
  //         id: Math.random(),
  //         imgUrl: "@/assets/images/product.jpg",
  //       },
  //       {
  //         id: Math.random(),
  //         imgUrl: "@/assets/images/product.jpg",
  //       },
  //       {
  //         id: Math.random(),
  //         imgUrl: "@/assets/images/product.jpg",
  //       },
  //     ],
  //   },
  // ]

  return (
    <main>
      <ProductsSectionLazy
        title={tSaved('saved_products')}
        emptyTitle={tEmpty('empty_product')}
        emptyText={tEmpty('empty_product_liked_list')}
        productsList={products}
      />
    </main>
  );
};

export default Page;
