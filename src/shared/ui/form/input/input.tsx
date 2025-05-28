import React from 'react';
import { cn } from '../../../lib/utils/utils';

export const IInputSize = {
	small: 'small',
	medium: 'medium',
	large: 'large',
} as const;
type TInputSize = keyof typeof IInputSize;

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

interface InputProps extends HTMLInputProps {
  id: string;
  size?: TInputSize;
  error?: boolean;
  value?: string;
  success?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  errorMessage?: string;
  mainWrapperClass?: string;
  inputWrapperClass?: string;
  inputClass?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const Input = React.memo((props: InputProps) => {
	const {
		size = 'medium',
		error,
		success,
		value,
		disabled,
		defaultValue,
		errorMessage,
		mainWrapperClass,
		inputWrapperClass,
		inputClass,
		startContent,
		endContent,
		onChange,
		...otherProps
	} = props;

	const inputWrapperMods = {
		'border-error': error,
		'border-success': success,
		'border-disabled': disabled,
		'px-2': size === 'large' || size === 'small',
		'px-3': size === 'medium',
	};

	const inputMods = {
		'text-error': error,
		'text-success': success,
		'text-disabled': disabled,
		'py-3.5': size === 'large',
		'py-2.5': size === 'medium',
		'py-2': size === 'small',
	};

	const [internalValue, setInternalValue] = React.useState(defaultValue || '');
	const isControlled = value !== undefined;
	const val = isControlled ? value : internalValue;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!isControlled) {
			setInternalValue(e.target.value);
		}

		onChange?.(e);
	};

	return (
		<div className={mainWrapperClass}>
			<div className={cn(
				'rounded-lg transition-all duration-300 flex-center bg-gray-500',
				'border-2 border-transparent hover:border-black focus-within:border-black',
				inputWrapperMods,
				inputWrapperClass
			)}
			>
				{startContent && startContent}
				<input
					value={val}
					disabled={disabled}
					onChange={handleChange}
					className={cn('outline-none grow text-base leading-130', inputMods, inputClass)}
					{...otherProps}
				/>
				{endContent && endContent}
			</div>

			{errorMessage && <span className='text-error mx-3.5 mt-2 text-xs'>{errorMessage}</span>}
		</div>
	);
});

