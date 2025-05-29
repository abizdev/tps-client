import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PopularBrandSwiper from './popular-brand-swiper';
import { brandsListMock } from '../../model/mock';

const meta = {
	title: 'entities/popular-brand-swipers',
	component: PopularBrandSwiper,
	tags: ['autodocs'],
	args: {
		brands: brandsListMock,
	}
} satisfies Meta<typeof PopularBrandSwiper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Reversed: Story = { args: { reverseDirection: true } };
