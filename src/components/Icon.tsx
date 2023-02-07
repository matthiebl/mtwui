import React from 'react'
import { classNames } from '../internal/class-compiler'
import { IconSvgPath, IconType } from '../internal/icons'

type IconSize = 'sm' | 'md' | 'lg'
type IconColor = 'black' | 'white' | 'gray' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'inherit'

export interface IconProps {
    // Properties
    type: IconType
    size?: IconSize
    color?: IconColor
}

export const Icon: React.FC<IconProps> = ({ type, size = 'md', color = 'black' }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className={classNames('inline', IconSizeStyles[size], IconColorStyles[color])}>
            {IconSvgPath[type]}
        </svg>
    )
}

const IconSizeStyles: Record<IconSize, string> = {
    sm: 'h-5 w-5',
    md: 'h-6 w-6',
    lg: 'h-7 w-7',
}

const IconColorStyles: Record<IconColor, string> = {
    black: 'text-black',
    white: 'text-white',
    gray: 'text-gray-400',
    primary: 'text-indigo-600',
    secondary: 'text-sky-600',
    success: 'text-lime-600',
    error: 'text-red-600',
    warning: 'text-amber-600',
    inherit: 'text-inherit',
}
