import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { ButtonEvent } from '../../types/events'
import { styles } from './styles'

export type ButtonVariant = 'primary' | 'secondary' | 'text'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonType = 'button' | 'submit'

export interface ButtonProps {
  // Props

  /**
   * The size of the button
   * @default "medium"
   */
  size?: ButtonSize
  /**
   * Controlls the variant of the button, and its primary styling
   * @default "primary"
   */
  variant?: ButtonVariant
  /**
   * Used to determine if the root component is an anchor tag
   */
  href?: string
  /**
   * This determines whether to use target as `"_blank"` for the anchor tag when href is present
   * @default false
   */
  external?: boolean
  /**
   * Determines the button type for accessiblity and forms. Use `"submit"` for form submission buttons
   * @default "button"
   */
  type?: ButtonType
  /**
   * Determines if the button is disabled from being clicked
   * @default false
   */
  disabled?: boolean

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
  size = 'medium',
  variant = 'primary',
  href,
  external = false,
  type = 'button',
  disabled = false,
  children,
  onClick = () => {},
}: ButtonProps) => {
  // onClick handler
  const onClickWrapper = () => onClick({})

  // styles
  const className = twMerge(
    styles.base,
    styles.variant[variant],
    variant === 'text' ? '' : styles.size[size],
  )

  // anchor tag
  if (href) {
    return (
      <a
        className={className}
        href={href}
        target={external ? '_blank' : undefined}
        onClick={disabled ? undefined : onClickWrapper}
      >
        {children}
      </a>
    )
  }

  // button
  return (
    <button
      type={type}
      aria-disabled={disabled}
      className={className}
      onClick={disabled ? undefined : onClickWrapper}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
