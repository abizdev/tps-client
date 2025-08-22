import dynamic from 'next/dynamic';

export const ProductsSectionLoaderLazy = dynamic(() => import('./ui/products-section-loader'));
