import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { InputSearch } from './input-search';
import React from 'react';
import { action } from 'storybook/actions';
import { Input } from '@shared/ui';

const meta = {
	title: 'shared/input-search',
	component: InputSearch,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		id: 'test-id',
		placeholder: 'placeholder',
		value: 'default value',
		defaultValue: 'default value',
		onChange: action('onChange'),
	},
} satisfies Meta<typeof InputSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

