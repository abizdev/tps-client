import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import CategoryCard from './category-card';

const meta = {
	title: 'entities/category-card',
	component: CategoryCard,
	tags: ['autodocs'],
	args: {
		title: 'Category',
		link: '#!',
	}
} satisfies Meta<typeof CategoryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
