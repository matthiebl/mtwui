import {
  buttonProps,
  className,
  disabled,
  fullWidth,
  size,
  variant,
} from '../../types/components/button'

type VariantStyle = {
  text: string
  background: string
  other: string
}

export interface ButtonTheme {
  defaultProps: {
    size: size
    variant: variant
    fullWidth: fullWidth
    disabled: disabled
    className: className
    buttonProps: buttonProps
  }
  styles: {
    base: string
    fullWidth: string
    sizes: {
      sm: string
      md: string
      lg: string
    }
    variants: {
      primary: VariantStyle
      secondary: VariantStyle
      text: VariantStyle
    }
  }
}

const button: ButtonTheme = {
  defaultProps: {
    size: 'md',
    variant: 'primary',
    fullWidth: false,
    disabled: false,
    className: '',
    buttonProps: {},
  },
  styles: {
    base: 'block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-500',
    fullWidth: '',
    sizes: {
      sm: 'rounded px-2.5 py-1',
      md: 'rounded-md px-3.5 py-2',
      lg: 'rounded-md px-5 py-2.5',
    },
    variants: {
      primary: {
        text: 'text-sm font-semibold text-white',
        background:
          'bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:disabled:bg-gray-500',
        other: 'shadow-sm',
      },
      secondary: {
        text: 'text-sm font-semibold text-gray-600 disabled:text-white dark:text-white',
        background:
          'bg-white hover:bg-gray-50 disabled:bg-gray-500 dark:bg-white/10 dark:hover:bg-white/20 dark:disabled:bg-gray-500',
        other: 'shadow-sm ring-1 ring-inset ring-gray-300 disabled:ring-0 dark:ring-0',
      },
      text: {
        text: 'text-indigo-600 hover:text-indigo-500 hover:underline dark:text-indigo-500 dark:hover:text-indigo-400 disabled:text-gray-500 disabled:hover:no-underline dark:disabled:text-gray-500',
        background: '',
        other: '',
      },
    },
  },
}

export default button
