import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProductCommentsRatings from './product-comments-ratings';
import { product } from '../../../model/mock';

const meta = {
	title: 'entities/product-comments-ratings',
	component: ProductCommentsRatings,
	tags: ['autodocs'],
	args: {
		rating: 5,
		totalComments: 123,
		totalRatings: product.totalRatings
	}
} satisfies Meta<typeof ProductCommentsRatings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
