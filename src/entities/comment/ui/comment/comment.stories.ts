import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Comment from './comment';
import { comment } from '../../model/mock';

const meta = {
	title: 'entities/comment',
	component: Comment,
	tags: ['autodocs'],
	args: { comment }
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
