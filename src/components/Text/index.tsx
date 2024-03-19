import { ElementType, createElement } from 'react'
import { twMerge } from 'tailwind-merge'
import { asType, children, className, variant } from '../../types/components/text'
import { useTheme } from '../../contexts/theme'

export interface TextProps {
  // Props

  /**
   * Controls the level of the text content
   * @default "paragraph"
   */
  variant?: variant
  /**
   * Provide additional classNames
   */
  className?: className
  /**
   * Provide an overide element to use as the base element
   */
  as?: asType

  // Slots

  /**
   * Text content
   */
  children: children
}

/**
 * A basic text element to provide text content
 */
export const Text = ({ variant, className, as, children }: TextProps) => {
  // setup
  const { text } = useTheme()
  const { defaultProps, styles } = text
  const { base, variants } = styles

  // defaults
  variant = variant ?? defaultProps.variant
  className = className ?? defaultProps.className

  // styles
  const style = twMerge(base, variants[variant], className)

  // return elements
  let element: ElementType
  switch (variant) {
    case 'paragraph':
    case 'small':
      element = 'p'
      break
    default:
      element = variant
      break
  }

  return createElement(as || element, { className: style }, children)
}
