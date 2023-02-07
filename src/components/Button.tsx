import React, { Children } from 'react'
import { classNames } from '../internal/class-compiler'
import { IconType } from '../internal/icons'

type ButtonColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning'
type ButtonVariant = 'filled' | 'outline' | 'text' | 'icon'

type ButtonDetail = {
    event: any
}

export interface ButtonProps {
    // Properties
    color?: ButtonColor
    variant?: ButtonVariant
    icon?: IconType
    iconAlign?: 'left' | 'right'
    fullWidth?: boolean
    disabled?: boolean

    // Slots
    children?: React.ReactNode

    // Events
    onClick?: (detail: ButtonDetail) => any
}

export const Button: React.FC<ButtonProps> = ({ color = 'primary', variant = 'filled', icon, iconAlign = 'left', fullWidth = false, disabled = false, children, onClick = () => {} }) => {
    return (
        <button
            className={classNames(
                'text-small inline-flex items-center border py-2 px-4 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
                fullWidth ? 'w-full' : 'w-fit',
                ButtonVariantStyles[variant],
                variant === 'filled' || variant === 'icon' ? ButtonColorStyles[color] : '',
            )}
            disabled={disabled}
            onClick={event => onClick({ event })}
        >
            {children}
        </button>
    )
}

const ButtonColorStyles: Record<ButtonColor, string> = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'bg-sky-500 hover:bg-sky-600 focus:ring-sky-400',
    success: 'bg-lime-600 hover:bg-lime-700 focus:ring-lime-500',
    error: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
    warning: 'bg-amber-500 hover:bg-amber-600 focus:ring-amber-400',
}

const ButtonVariantStyles: Record<ButtonVariant, string> = {
    filled: 'rounded-md border-transparent text-white',
    outline: 'rounded-md border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500',
    text: 'rounded-md border-transparent',
    icon: 'rounded-full border-transparent',
}
