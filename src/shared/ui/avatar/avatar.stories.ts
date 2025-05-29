import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Avatar from './avatar';
import RandomAvatar from '../../assets/images/random-avatar.webp';

const meta = {
	title: 'shared/avatar',
	component: Avatar,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		src: RandomAvatar.src,
	},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// radius
export const RoundedSm: Story = { args: { radius: 'sm' } };
export const RoundedMd: Story = { args: { radius: 'md' } };
export const RoundedLg: Story = { args: { radius: 'lg' } };
export const RoundedFull: Story = { args: { radius: 'full' } };
export const AvatarWithoutImage: Story = { args: { radius: 'full', src: '' } };

