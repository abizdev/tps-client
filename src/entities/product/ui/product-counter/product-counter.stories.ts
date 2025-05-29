import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProductCounter from './product-counter';
import { action } from 'storybook/actions';

const meta = {
	title: 'entities/product-counter',
	component: ProductCounter,
	tags: ['autodocs'],
	args: {
		count: 1,
		totalCount: 5,
		increase: action('increase'),
		decrease: action('decrease'),
	}
} satisfies Meta<typeof ProductCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Transparent: Story = {};
export const Gray: Story = { args: { color: 'gray' } };
