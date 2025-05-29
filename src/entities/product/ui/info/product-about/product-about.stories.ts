import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProductAbout from './product-about';
import { product } from '../../../model/mock';

const meta = {
	title: 'entities/product-about',
	component: ProductAbout,
	tags: ['autodocs'],
	args: { product }
} satisfies Meta<typeof ProductAbout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
