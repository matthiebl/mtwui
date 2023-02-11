import React from 'react'

type TooltipAlign = 'top-left' | 'top' | 'top-right' | 'right-top' | 'right' | 'right-bottom' | 'bottom-left' | 'bottom' | 'bottom-right' | 'left-top' | 'left' | 'left-bototm'
type TooltipVariant = 'custom' | 'light' | 'dark'

export interface TooltipProps {
    // Properties
    control: boolean | 'hover'
    align?: TooltipAlign
    arrowTip?: boolean
    variant?: TooltipVariant

    // Slots
    children?: React.ReactNode
    tooltip?: React.ReactNode
}

export const Tooltip: React.FC<TooltipProps> = ({ control, align = 'right', arrowTip = false, variant = 'light', children, tooltip }) => {
    return (
        <div className='flex'>
            <div>{children}</div>
            <div>{tooltip}</div>
        </div>
    )
}
