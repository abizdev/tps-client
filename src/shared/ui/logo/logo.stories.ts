import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Logo } from './logo';

const meta = {
	title: 'shared/logo',
	component: Logo,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: { className: 'h-11.5' }
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { color: 'primary' } };
export const Black: Story = { args: { color: 'black' } };
export const White: Story = { args: { color: 'white' } };
export const HoverEnable: Story = { args: { hoverEnable: true } };
