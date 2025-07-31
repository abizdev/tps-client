import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Skeleton from './skeleton';

const meta = {
	title: 'shared/skeleton',
	component: Skeleton,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: { className: 'w-[300px] h-11.5' }
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
