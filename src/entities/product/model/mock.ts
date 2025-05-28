import { IProduct } from './types';

export const product: IProduct = {
	id: Math.random(),
	title: 'Product name',
	slug: 'product-name',
	tags: ['tag1', 'tag2'],
	manufacturer: 'Brand name',
	text: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
	name: 'Miraculum духи Byc Moze... Paris Parfume',
	targeted_audience: 'Man',
	price: 184000,
	discount: 184000,
	linkUrl: '#!',
	rating: 5,
	totalRatings: [
		{ total: 1, percent: 20 },
		{ total: 2, percent: 40 },
		{ total: 3, percent: 60 },
		{ total: 4, percent: 80 },
		{ total: 5, percent: 100 },
	],
	totalComments: 123,
	count: 20,
	totalCount: 100,
	weights: [{ value: 50, enabled: true }, { value: 100, enabled: true }, { value: 150, enabled: false }],
	year: 2023,
	manufactured_country: 'Uzbekistan',
	isLiked: false,
	image: '@/assets/images/product.jpg',
	category: [{ id: 1, name: 'Category 1' }, { id: 2, name: 'Category 2' }],
	// images: [
	//   {
	//     id: Math.random(),
	//     imgUrl: "@/assets/images/product.jpg",
	//   },
	//   {
	//     id: Math.random(),
	//     imgUrl: "@/assets/images/product.jpg",
	//   },
	//   {
	//     id: Math.random(),
	//     imgUrl: "@/assets/images/product.jpg",
	//   },
	// ],
};
