export const IButtonSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;
export type IButtonSize = keyof typeof IButtonSize;

export const IButtonColor = {
  primary: 'primary',
  transparent: 'transparent',
  gray: 'gray',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  error: 'error',
} as const;
export type IButtonColor = keyof typeof IButtonColor;

export const IButtonVariant = {
  contained: 'contained',
  outline: 'outline',
  clear: 'clear',
} as const;
export type IButtonVariant = keyof typeof IButtonVariant;
