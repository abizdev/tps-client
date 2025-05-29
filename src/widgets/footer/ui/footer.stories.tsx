import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Footer } from './footer';

const meta = {
	title: 'widgets/footer',
	component: Footer,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// position
export const Primary: Story = {};

