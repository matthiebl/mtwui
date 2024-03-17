import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { ButtonEvent } from '../../types/base/events'
import {
  buttonProps,
  className,
  disabled,
  fullWidth,
  size,
  variant,
} from '../../types/components/button'
import { useTheme } from '../../contexts/theme'
import classes from '../../utils/classes'

export interface ButtonProps {
  // Props

  /**
   * The size of the button
   * @default "md"
   */
  size?: size
  /**
   * Controls the primary styling
   * @default "primary"
   */
  variant?: variant
  /**
   * Determines if a button takes up the full available width
   * @default false
   */
  fullWidth?: fullWidth
  /**
   * Determines if the button is disabled from being clicked
   * @default false
   */
  disabled?: disabled
  /**
   * Provide additional classNames
   */
  className?: className
  /**
   * Provide additional props directly to the button base element
   */
  buttonProps?: buttonProps

  // Slots

  /**
   * Button contents
   */
  children: ReactNode

  // Events

  /**
   * Optional click handler for the button
   */
  onClick?: ButtonEvent
}

/**
 * A basic button component for use across a webpage
 */
export const Button = ({
  size,
  variant,
  fullWidth,
  disabled,
  className,
  buttonProps,
  children,
  onClick,
}: ButtonProps) => {
  // setup
  const { button } = useTheme()
  const { defaultProps, styles } = button
  const { base, sizes, variants, fullWidth: fullWidthStyles } = styles

  // defaults
  size = size ?? defaultProps.size
  variant = variant ?? defaultProps.variant
  fullWidth = fullWidth ?? defaultProps.fullWidth
  disabled = disabled ?? defaultProps.disabled
  className = className ?? defaultProps.className
  buttonProps = buttonProps ?? defaultProps.buttonProps

  // styles
  const style = twMerge(
    base,
    variant !== 'text' && sizes[size],
    classes(variants[variant]),
    fullWidth && fullWidthStyles,
    className,
  )

  // return element
  return (
    <button {...buttonProps} className={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
