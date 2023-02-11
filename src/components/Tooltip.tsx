import React from 'react'
import { classNames } from '../internal/class-compiler'

export type TooltipAlign = 'top-left' | 'top' | 'top-right' | 'right-top' | 'right' | 'right-bottom' | 'bottom-left' | 'bottom' | 'bottom-right' | 'left-top' | 'left' | 'left-bottom'
export type TooltipVariant = 'custom' | 'light' | 'dark'

export interface TooltipProps {
    // Properties
    control: boolean | 'hover'
    align?: TooltipAlign
    arrowTip?: boolean
    variant?: TooltipVariant

    // Slots
    children?: React.ReactNode
    controller?: React.ReactNode

    // Events
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const Tooltip: React.FC<TooltipProps> = ({ control, align = 'right', arrowTip = false, variant = 'light', children, controller, onClick }) => {
    const hasArrow = variant === 'custom' ? false : arrowTip
    const isHidden = control === 'hover' ? false : !control

    return (
        <div className={classNames('group relative flex h-fit w-fit', containerAlignStyles[align])}>
            <div>{controller}</div>
            {hasArrow && (
                <div
                    aria-hidden={isHidden}
                    className={classNames(
                        'absolute z-50 h-3 w-3 rotate-45 rounded-sm transition duration-150',
                        control === 'hover' ? 'group scale-0 group-hover:scale-100' : 'scale-100 aria-hidden:scale-0',
                        arrowVariantStyles[variant],
                        arrowAlignStyles[align],
                    )}
                />
            )}
            <div
                aria-hidden={isHidden}
                className={classNames(
                    'absolute z-50 w-max transition duration-150',
                    control === 'hover' ? 'group scale-0 group-hover:scale-100' : 'scale-100 aria-hidden:scale-0',
                    tooltipVariantStyles[variant],
                    tooltipAlignStyles[align],
                )}
                onClick={onClick}
            >
                {children}
            </div>
        </div>
    )
}

const containerAlignStyles: Record<TooltipAlign, string> = {
    'top-left': 'flex-col-reverse items-start',
    top: 'flex-col-reverse items-center',
    'top-right': 'flex-col-reverse items-end',
    'right-top': 'items-start',
    right: 'items-center',
    'right-bottom': 'items-end',
    'bottom-left': 'flex-col items-start',
    bottom: 'flex-col items-center',
    'bottom-right': 'flex-col items-end',
    'left-top': 'flex-row-reverse items-start',
    left: 'flex-row-reverse items-center',
    'left-bottom': 'flex-row-reverse items-end',
}

const tooltipAlignStyles: Record<TooltipAlign, string> = {
    'top-left': 'bottom-full -translate-y-2',
    top: 'bottom-full -translate-y-2',
    'top-right': 'bottom-full -translate-y-2',
    'right-top': 'left-full translate-x-2',
    right: 'left-full translate-x-2',
    'right-bottom': 'left-full translate-x-2',
    'bottom-left': 'top-full translate-y-2',
    bottom: 'top-full translate-y-2',
    'bottom-right': 'top-full translate-y-2',
    'left-top': 'right-full -translate-x-2',
    left: 'right-full -translate-x-2',
    'left-bottom': 'right-full -translate-x-2',
}

const arrowAlignStyles: Record<TooltipAlign, string> = {
    'top-left': 'bottom-full -translate-y-1 translate-x-3',
    top: 'bottom-full -translate-y-1',
    'top-right': 'bottom-full -translate-y-1 -translate-x-3',
    'right-top': 'left-full translate-y-3 translate-x-1',
    right: 'left-full translate-x-1',
    'right-bottom': 'left-full -translate-y-3 translate-x-1',
    'bottom-left': 'top-full translate-y-1 translate-x-3',
    bottom: 'top-full translate-y-1',
    'bottom-right': 'top-full translate-y-1 -translate-x-3',
    'left-top': 'right-full translate-y-3 -translate-x-1',
    left: 'right-full -translate-x-1',
    'left-bottom': 'right-full -translate-y-3 -translate-x-1',
}

const tooltipVariantStyles: Record<TooltipVariant, string> = {
    custom: '',
    light: 'py-2 px-4 bg-white rounded-md border border-gray-300 shadow-sm text-sm text-gray-900',
    dark: 'py-2 px-4 bg-gray-900 rounded-md shadow-sm text-sm text-white',
}

const arrowVariantStyles: Record<TooltipVariant, string> = {
    custom: '',
    light: 'bg-white border border-gray-300 shadow-sm',
    dark: 'bg-gray-900 shadow-sm',
}
