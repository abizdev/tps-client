import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SectionTitleLoader from './section-title-loader';


const meta = {
	title: 'widgets/section-title-loader',
	component: SectionTitleLoader,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: { className: 'w-[300px] h-11.5' }
} satisfies Meta<typeof SectionTitleLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
