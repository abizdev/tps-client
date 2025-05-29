import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import DiscountBadge from './discount-badge';

const meta = {
	title: 'shared/discount-badge',
	component: DiscountBadge,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: { className: 'relative' }
} satisfies Meta<typeof DiscountBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
