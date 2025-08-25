import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import LangSwitcher from '@features/lang-switcher/ui/lang-switcher';


const meta = {
	title: 'features/lang-switcher',
	component: LangSwitcher,
	tags: ['autodocs'],
	args: {
		activeLang: 'en',
	}
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
