import React from 'react'
import { classNames } from '../internal/class-compiler'
import { marginSpacingToStyle, paddingSpacingToStyle, SpacingProps } from '../internal/spacing'

type BoxDisplay = 'block' | 'inline' | 'inline-block' | 'none'
type BoxVariant = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div' | 'sub'

export interface BoxProps {
    // Properties
    display?: BoxDisplay
    variant?: BoxVariant
    padding?: SpacingProps
    margin?: SpacingProps

    // Slots
    children?: React.ReactNode
}

export const Box: React.FC<BoxProps> = ({ display = 'block', variant = 'div', padding = {}, margin = {}, children }) => {
    const Tag = variant === 'sub' ? 'span' : variant

    return <Tag className={classNames(DisplayToStyle[display], VariantToTextStyle[variant], paddingSpacingToStyle(padding), marginSpacingToStyle(margin))}>{children}</Tag>
}

const DisplayToStyle: Record<BoxDisplay, string> = {
    block: 'block',
    inline: 'inline',
    'inline-block': 'inline-block',
    none: 'hidden',
}

const VariantToTextStyle: Record<BoxVariant, string> = {
    p: 'text-md',
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    h5: 'text-lg font-bold',
    div: '',
    sub: 'text-sm text-gray-500',
}
