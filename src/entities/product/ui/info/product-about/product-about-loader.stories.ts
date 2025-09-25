import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProductAboutLoader from './product-about-loader';

const meta = {
	title: 'entities/product-about-loader',
	component: ProductAboutLoader,
	tags: ['autodocs'],
} satisfies Meta<typeof ProductAboutLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
