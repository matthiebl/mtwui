import { className, variant } from '../../types/components/text'

export interface TextTheme {
  defaultProps: {
    variant: variant
    className: className
  }
  styles: {
    base: string
    variants: {
      h1: string
      h2: string
      h3: string
      h4: string
      h5: string
      h6: string
      paragraph: string
      small: string
    }
  }
}

const text: TextTheme = {
  defaultProps: {
    variant: 'paragraph',
    className: '',
  },
  styles: {
    base: 'text-gray-900 dark:text-white',
    variants: {
      h1: 'text-5xl font-semibold',
      h2: 'text-4xl font-semibold',
      h3: 'text-3xl font-semibold',
      h4: 'text-2xl font-semibold',
      h5: 'text-xl font-semibold',
      h6: 'text-base font-semibold',
      paragraph: 'text-base text-gray-700 dark:text-gray-100',
      small: 'text-sm text-gray-700 dark:text-gray-100',
    },
  },
}

export default text
