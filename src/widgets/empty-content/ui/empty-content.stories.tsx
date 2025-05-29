import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import EmptyContent from './empty-content';
import { Empty } from '@shared/assets/images';
import Image from 'next/image';

const meta = {
	title: 'widgets/empty-content',
	component: EmptyContent,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		title: 'Title',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		children: <Image src={Empty} className='w-72' alt='empty' />
	},
} satisfies Meta<typeof EmptyContent>;

export default meta;
type Story = StoryObj<typeof meta>;

// position
export const Primary: Story = {};

