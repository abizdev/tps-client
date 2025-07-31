import dynamic from 'next/dynamic';

export const ProductsSectionLoaderLazy = dynamic(() => import('./products-section-loader'));
