'use client'

import React from 'react';

export const useCounter = (defaultValue?: number) => {
  const [value, setValue] = React.useState<number>(defaultValue ?? 0);

  const incCount = React.useCallback(() => setValue(value + 1), [value])
  const decCount = React.useCallback(() => setValue(value - 1), [value])

  return { value, setValue, incCount, decCount }
}
