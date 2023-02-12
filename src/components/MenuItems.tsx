import React from 'react'
import { classNames } from '../internal/class-compiler'
import { IconType } from '../internal/icons'
import { Button, ButtonColor, ButtonDetail, ButtonVariant } from './Button'
import { Icon } from './Icon'
import { Link, LinkDetail } from './Link'

type MenuItemType = 'link' | 'button' | 'expandable' | 'dropdown' | 'divider'
// type MenuItem = {
//     type: MenuItemType
//     icon?: IconType
//     label?: string
//     href?: string
//     target?: string
//     items?: MenuItem[]
//     onClick?: (detail: any) => any
// }

type MenuItem = MenuItemDivider | MenuItemLink | MenuItemButton | MenuItemExpandable

type MenuItemsVariant = 'compact' | 'rounded'

export interface MenuItemsProps {
    // Properties
    items: MenuItem[]
    variant?: MenuItemsVariant
}

export const MenuItems: React.FC<MenuItemsProps> = ({ items, variant = 'compact' }) => {
    const variantStyles = variant === 'compact' ? 'py-2 px-4' : ''

    return (
        <div className='flex flex-col text-sm text-gray-900'>
            {items.map(item => {
                const key = crypto.randomUUID()

                if (item.type === 'divider') {
                    return <div key={key} className='my-2 w-full border-t border-gray-100' />
                }

                if (item.type === 'link') {
                    return <LinkItem key={key} {...item} className={variantStyles} />
                }

                if (item.type === 'button') {
                    return <ButtonItem key={key} {...item} className={variantStyles} />
                }

                if (item.type === 'expandable') {
                    return <ExpandableItem key={key} {...item} className={variantStyles} />
                }
            })}
        </div>
    )
}

type MenuItemDivider = {
    type: 'divider'
}

type MenuItemLink = {
    type: 'link'
    icon?: IconType
    label: string
    href: string
    target?: string
    disabled?: boolean
    onClick?: (detail: LinkDetail) => any
}

const LinkItem: React.FC<MenuItemLink & { className: string }> = ({ icon, label, href, target, disabled = false, onClick, className }) => {
    const _onClick: React.MouseEventHandler<HTMLAnchorElement> = event => {
        if (onClick) {
            onClick({
                href,
                target,
                event,
            })
        }
    }

    return (
        <a
            role='button'
            aria-disabled={disabled}
            href={href}
            target={target}
            onClick={_onClick}
            className={classNames(className, 'hover:bg-gray-100 aria-disabled:pointer-events-none aria-disabled:bg-white aria-disabled:text-gray-400')}
        >
            {label}
        </a>
    )
}

type MenuItemButton = {
    type: 'button'
    icon?: IconType
    label: string
    color?: ButtonColor
    variant?: ButtonVariant
    disabled?: boolean
    onClick?: (detail: ButtonDetail) => any
}

const ButtonItem: React.FC<MenuItemButton & { className: string }> = ({ icon, label, color, variant, disabled = false, onClick, className }) => {
    return (
        <div className={className}>
            <Button color={color} variant={variant} icon={icon} disabled={disabled} onClick={onClick} fullWidth>
                {label}
            </Button>
        </div>
    )
}

type MenuItemExpandable = {
    type: 'expandable'
    icon?: IconType
    label: string
    items: MenuItemLink[]
    disabled?: boolean
    defaultOpen?: boolean
}

const ExpandableItem: React.FC<MenuItemExpandable & { className: string }> = ({ icon, label, items, disabled = false, defaultOpen = false, className }) => {
    const [open, setOpen] = React.useState(defaultOpen)

    return (
        <>
            <button
                disabled={disabled}
                onClick={event => {
                    event.stopPropagation()
                    setOpen(!open)
                }}
                className={classNames(className, 'flex items-center justify-between gap-10 hover:bg-gray-100')}
            >
                <span className='flex items-center gap-2'>
                    {icon && <Icon type={icon} size='sm' color='inherit' />}
                    <span>{label}</span>
                </span>
                <Icon type='chevron-down' size='sm' color='inherit' />
            </button>
            <div aria-expanded={open} className='hidden flex-col aria-expanded:flex'>
                {items.map(item => (
                    <LinkItem key={crypto.randomUUID()} {...item} className={classNames(className, 'pl-11')} />
                ))}
            </div>
        </>
    )
}
