import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Loading from './loading';

const meta = {
	title: 'shared/loading',
	component: Loading,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: { className: 'text-primary' }
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
