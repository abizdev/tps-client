'use client';

import React from 'react';

interface Props {
  defaultValue?: string;
}

export const useSearchInput = ({ defaultValue = '' }: Props) => {
	const [value, setValue] = React.useState<string>(defaultValue);

	const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}, []);

	const onClearInput = React.useCallback(() => {
		setValue('');
	}, []);

	return { value, setValue, handleChange, onClearInput };

};
