import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from './input';

const meta = {
	title: 'shared/input',
	component: Input,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		id: 'test-id',
		placeholder: 'placeholder',
		defaultValue: 'default value'
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const PrimaryEmpty: Story = { args: { defaultValue: '' } };
export const Disabled: Story = { args: { disabled: true } };
export const Success: Story = { args: { success: true } };
export const Error: Story = { args: { error: true } };
export const ErrorMessage: Story = { args: { error: true, errorMessage: 'error message' } };

// size
export const Small: Story = { args: { size: 'small' } };
export const Medium: Story = { args: { size: 'medium' } };
export const Large: Story = { args: { size: 'large' } };

