import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProductCard from './product-card';
import { product } from '../../model/mock';

const meta = {
	title: 'entities/product-card',
	component: ProductCard,
	tags: ['autodocs'],
	args: { product }
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
