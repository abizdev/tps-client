import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Badge from './badge';
import Avatar from '@shared/ui/avatar/avatar';

const meta = {
	title: 'shared/badge',
	component: Badge,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		children: <Avatar />
	},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Count: Story = { args: { count: 5 } };
export const CountMax: Story = { args: { count: 100, max: 99 } };
export const Show: Story = { args: { show: true } };

// position
export const TopLeft: Story = { args: { show: true, position: 'top-left' } };
export const TopRight: Story = { args: { show: true, position: 'top-right' } };
export const BottomRight: Story = { args: { show: true, position: 'bottom-right' } };
export const BottomLef: Story = { args: { show: true, position: 'bottom-left' } };

