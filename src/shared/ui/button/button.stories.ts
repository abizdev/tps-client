import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './button';

const meta = {
	title: 'shared/button',
	component: Button,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	// argTypes: {
	// 	backgroundColor: { control: 'color' },
	// },
	args: {
		text: 'Button',
		color: 'primary',
		variant: 'contained',
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// colors
export const Primary: Story = { args: { variant: 'contained', color: 'primary' } };
export const Secondary: Story = { args: { variant: 'contained', color: 'secondary' } };
export const Transparent: Story = { args: { variant: 'contained', color: 'transparent' } };
export const Gray: Story = { args: { variant: 'contained', color: 'gray' } };
export const Success: Story = { args: { variant: 'contained', color: 'success' } };
export const Warning: Story = { args: { variant: 'contained', color: 'warning' } };
export const Error: Story = { args: { variant: 'contained', color: 'error' } };
export const Disabled: Story = { args: { variant: 'contained', disabled: true } };
export const Loading: Story = { args: { variant: 'contained', loading: true } };

// Variants
export const Contained: Story = { args: { variant: 'contained' } };
export const Outline: Story = { args: { variant: 'outline' } };
export const Clear: Story = { args: { variant: 'clear' } };

// Sizes
export const Small: Story = { args: { size: 'small' } };
export const Medium: Story = { args: { size: 'medium' } };
export const Large: Story = { args: { size: 'large' } };

// Icon
export const Icon: Story = { args: { icon: 'icon-cart' } };
export const IconLeft: Story = { args: { icon: 'icon-cart', iconPosition: 'left' } };
export const IconOnly: Story = { args: { icon: 'icon-cart', text: '' } };
