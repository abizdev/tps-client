import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Header } from './header';

const meta = {
	title: 'widgets/header',
	component: Header,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// position
export const Primary: Story = {};

