import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProductCardLoader from './product-card-loader';

const meta = {
	title: 'entities/product-card-loader',
	component: ProductCardLoader,
	tags: ['autodocs'],
} satisfies Meta<typeof ProductCardLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
