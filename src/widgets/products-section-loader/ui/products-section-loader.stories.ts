import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProductsSectionLoader from './products-section-loader';

const meta = {
	title: 'widgets/products-section-loader',
	component: ProductsSectionLoader,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
} satisfies Meta<typeof ProductsSectionLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
