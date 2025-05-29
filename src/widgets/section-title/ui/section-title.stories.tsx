import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SectionTitle from './section-title';

const meta = {
	title: 'widgets/section-title',
	component: SectionTitle,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		title: 'Title',
		text: 'See all',
		link: '#!'
	}
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

// position
export const Primary: Story = {};

