import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import BreadCrumbs from './bread-crumbs';
import { mockBreadCrumbs } from './mock';

const meta = {
	title: 'shared/bread-crumbs',
	component: BreadCrumbs,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: { paths: mockBreadCrumbs },
} satisfies Meta<typeof BreadCrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BreadCrumb: Story = {};

