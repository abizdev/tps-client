import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import StarRating from './star-rating';

const meta = {
	title: 'shared/star-rating',
	component: StarRating,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: { selectedStars: 3 },
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

// sizes
export const Small: Story = { args: { size: 'small' } };
export const Medium: Story = { args: { size: 'medium' } };
export const Large: Story = { args: { size: 'large' } };
