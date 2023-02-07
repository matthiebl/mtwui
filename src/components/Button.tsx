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
            className={classNames('inline-flex items-center rounded-md border py-2 px-4 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2', fullWidth ? 'w-full' : 'w-fit')}
            disabled={disabled}
            onClick={event => onClick({ event })}
        >
            {children}
        </button>
    )
}
