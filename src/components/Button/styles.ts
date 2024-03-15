import { ButtonSize, ButtonVariant } from '.'

export const styles = {
  base: 'block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-500',
  size: {
    small: 'rounded px-2.5 py-1',
    medium: 'rounded-md px-3.5 py-2',
    large: 'rounded-md px-5 py-2.5',
  } as Record<ButtonSize, string>,
  variant: {
    primary:
      'bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:bg-gray-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:disabled:bg-gray-500',
    secondary:
      'bg-white text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:bg-gray-500 disabled:text-white disabled:ring-0 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:ring-0 dark:disabled:bg-gray-500',
    text: 'text-indigo-600 hover:text-indigo-500 hover:underline dark:text-indigo-500 dark:hover:text-indigo-400 disabled:text-gray-500 disabled:hover:no-underline dark:disabled:text-gray-500',
  } as Record<ButtonVariant, string>,
}
