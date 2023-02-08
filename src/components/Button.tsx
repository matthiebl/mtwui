import React, { Children } from 'react'
import { classNames } from '../internal/class-compiler'
import { IconType } from '../internal/icons'
import { Icon } from './Icon'

type ButtonColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning'
type ButtonVariant = 'filled' | 'outline'

type ButtonDetail = {
    event: any
}

export interface ButtonProps {
    // Properties
    color?: ButtonColor
    variant?: ButtonVariant
    icon?: IconType
    fullWidth?: boolean
    disabled?: boolean

    // Slots
    children?: React.ReactNode

    // Events
    onClick?: (detail: ButtonDetail) => any
}

export const Button: React.FC<ButtonProps> = ({ color = 'primary', variant = 'filled', icon, fullWidth = false, disabled = false, children, onClick = () => {} }) => {
    return (
        <button
            type='button'
            className={classNames(
                'inline-flex items-center justify-center rounded-md border text-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
                children ? 'py-2 px-4' : 'p-2',
                fullWidth ? 'w-full' : '',
                ButtonVariantStyles[variant],
                variant === 'filled' ? ButtonColorStyles[color] : '',
            )}
            disabled={disabled}
            onClick={event => onClick({ event })}
        >
            {icon && (
                <div className={classNames('h-5 w-5', children ? '-ml-1 mr-2' : '', variant === 'outline' ? 'text-gray-500' : '')}>
                    <Icon type={icon} size='sm' color='inherit' />
                </div>
            )}
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
    filled: 'shadow-sm border-transparent text-white disabled:bg-gray-300',
    outline: 'shadow-sm border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500 disabled:bg-white disabled:text-gray-400',
}
