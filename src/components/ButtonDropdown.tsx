import React from 'react'
import { IconType } from '../internal/icons'
import { Button, ButtonColor, ButtonDetail, ButtonVariant } from './Button'
import { Tooltip, TooltipAlign } from './Tooltip'

type ButtonDropdownDetail = {
    event: any
    open: boolean
}

export interface ButtonDropdownProps {
    // Properties
    align?: TooltipAlign
    buttonText?: string
    color?: ButtonColor
    disabled?: boolean
    variant?: ButtonVariant

    // Slots
    children?: React.ReactNode

    // Events
    onClick?: (detail: ButtonDropdownDetail) => any
}

export const ButtonDropdown: React.FC<ButtonDropdownProps> = ({ align = 'bottom-right', buttonText, color, disabled, variant, children, onClick }) => {
    const [open, setOpen] = React.useState(false)

    const tooltipClick: React.MouseEventHandler<HTMLDivElement> = event => {
        event.stopPropagation()
    }

    const buttonClick = (detail: ButtonDetail) => {
        setOpen(!open)
        if (onClick) {
            onClick({
                event: detail.event,
                open: !open,
            })
        }
    }

    return (
        <Tooltip
            control={open}
            align={align}
            variant='custom'
            controller={
                <Button color={color} variant={variant} icon={iconDirection[align]} iconAlign={align.startsWith('left') ? 'left' : 'right'} disabled={disabled} onClick={buttonClick}>
                    {buttonText}
                </Button>
            }
            onClick={tooltipClick}
        >
            <div className='rounded-md bg-white py-2 shadow'>{children}</div>
        </Tooltip>
    )
}

const iconDirection: Record<TooltipAlign, IconType> = {
    'top-left': 'chevron-up',
    top: 'chevron-up',
    'top-right': 'chevron-up',
    'right-top': 'chevron-right',
    right: 'chevron-right',
    'right-bottom': 'chevron-right',
    'bottom-left': 'chevron-down',
    bottom: 'chevron-down',
    'bottom-right': 'chevron-down',
    'left-top': 'chevron-left',
    left: 'chevron-left',
    'left-bottom': 'chevron-left',
}
