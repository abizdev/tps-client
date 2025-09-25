import ProductMainLoader from './product-main-loader';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
	title: 'entities/product-main-loader',
	component: ProductMainLoader,
	tags: ['autodocs'],
	args: { }
} satisfies Meta<typeof ProductMainLoader>;

export default meta;
type Story = StoryObj<typeof ProductMainLoader>;

export const Primary: Story = {};
