import React from 'react';
import { Input, IInputSize } from '../input/input';

interface Props {
  id: string
  size?: keyof typeof IInputSize
  value: string;
  placeholder?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
}

export const InputSearch = React.memo<Props>((props) => {
	const {
		id,
		value,
		size = IInputSize.medium,
		placeholder,
		defaultValue,
		onChange,
	} = props;

	const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	}, [onChange]);

	const onClearInput = React.useCallback(() => {
		onChange('');
	}, [onChange]);

	return (
		<Input
			id={id}
			type='search'
			size={size}
			value={value}
			placeholder={placeholder}
			defaultValue={defaultValue}
			onChange={handleChange}
			inputWrapperClass='gap-2'
			startContent={<i className='icon-search text-gray' />}
			endContent={(
				<button
					type='button'
					onClick={onClearInput}
					className='icon-close-circle cursor-pointer text-xl leading-5 text-gray-200 hover-primary transition-300'
				/>
			)}
		/>
	);
});
