import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import BrandCardLoader from './brand-card-loader';

const meta = {
	title: 'entities/brand-card-loader',
	component: BrandCardLoader,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {}
} satisfies Meta<typeof BrandCardLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
