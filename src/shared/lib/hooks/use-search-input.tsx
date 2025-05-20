'use client'

import React from 'react';
import { debounce } from '@shared/lib/utils';

interface Props {
  defaultValue?: string;
}

export const useSearchInput = ({ defaultValue = '' }: Props) => {
  const [value, setValue] = React.useState<string>(defaultValue);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [value])

  const onClearInput = React.useCallback(() => {
    setValue('')
  }, [value])

  return { value, setValue, handleChange, onClearInput };

}
