import React from 'react'
import { IconType } from '../internal/icons'
import { Button, ButtonColor, ButtonDetail, ButtonVariant } from './Button'
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

type MenuItem = MenuItemDivider | MenuItemLink | MenuItemButton

type MenuItemsVariant = 'compact' | 'rounded'

export interface MenuItemsProps {
    // Properties
    items: MenuItem[]
    variant?: MenuItemsVariant
}

export const MenuItems: React.FC<MenuItemsProps> = ({ items, variant = 'compact' }) => {
    return (
        <div className='flex flex-col text-sm text-gray-900'>
            {items.map(item => {
                const key = crypto.randomUUID()

                if (item.type === 'link') {
                    return <LinkItem key={key} {...item} />
                }

                if (item.type === 'button') {
                    return <ButtonItem key={key} {...item} />
                }

                if (item.type === 'divider') {
                    return <div key={key} className='my-1.5 w-full border-t border-gray-100' />
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

const LinkItem: React.FC<MenuItemLink> = ({ icon, label, href, target, disabled = false, onClick }) => {
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
        <a role='button' aria-disabled={disabled} href={href} target={target} onClick={_onClick} className='py-1.5 px-4 hover:bg-gray-100'>
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

const ButtonItem: React.FC<MenuItemButton> = ({ icon, label, color, variant, disabled = false, onClick }) => {
    return (
        <div className='px-4 py-1.5'>
            <Button color={color} variant={variant} icon={icon} disabled={disabled} onClick={onClick} fullWidth>
                {label}
            </Button>
        </div>
    )
}
