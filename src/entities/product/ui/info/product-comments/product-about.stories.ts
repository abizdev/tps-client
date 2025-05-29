import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProductComments from './product-comments';
import { product } from '../../../model/mock';

const meta = {
	title: 'entities/product-comments',
	component: ProductComments,
	tags: ['autodocs'],
	args: { product }
} satisfies Meta<typeof ProductComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
