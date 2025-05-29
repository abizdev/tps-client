import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProductMain from './product-main';
import { product } from '../../../model/mock';

const meta = {
	title: 'entities/product-main',
	component: ProductMain,
	tags: ['autodocs'],
	args: { product }
} satisfies Meta<typeof ProductMain>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
