import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Label from './label';
import { Input } from '../input/input';

const meta = {
	title: 'shared/label',
	component: Label,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		labelId: 'test-id',
		labelText: 'Test Label',
		children: <Input id='test-id' placeholder='label' />
	},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Required: Story = { args: { required: true } };

