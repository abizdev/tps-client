import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import CommentLoader from './comment-loader';

const meta = {
	title: 'entities/comment-loader',
	component: CommentLoader,
	tags: ['autodocs'],
	args: { }
} satisfies Meta<typeof CommentLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
