import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import BrandCard from './brand-card';

const meta = {
	title: 'entities/brand-card',
	component: BrandCard,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		brand: { id: 1, name: 'Brand', linkUrl: '#' },
	}
} satisfies Meta<typeof BrandCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
