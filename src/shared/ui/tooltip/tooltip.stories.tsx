import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Tooltip from './tooltip';

const meta = {
	title: 'shared/tooltip',
	component: Tooltip,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		content: 'tooltip text',
		children: <p>Lorem ipsum dolor sit amet.</p>
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// position
export const Top: Story = { args: { position: 'top' } };
export const Left: Story = { args: { position: 'left' } };
export const Bottom: Story = { args: { position: 'bottom' } };
export const Right: Story = { args: { position: 'right' } };

