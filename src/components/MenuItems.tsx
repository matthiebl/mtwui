import React from 'react'
import { classNames } from '../internal/class-compiler'
import { IconType } from '../internal/icons'
import { Button, ButtonColor, ButtonDetail, ButtonVariant } from './Button'
import { Icon } from './Icon'
import { LinkDetail } from './Link'

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

                switch (item.type) {
                    case 'divider':
                        return <div key={key} className='my-2 w-full border-t border-gray-100' />
                    case 'link':
                        return <LinkItem key={key} {...item} className={variantStyles} />
                    case 'button':
                        return <ButtonItem key={key} {...item} className={variantStyles} />
                    case 'expandable':
                        return <ExpandableItem key={key} {...item} className={variantStyles} />
                    // case 'dropdown':
                    //     return <DropdownItem key={key} {...item} className={variantStyles} />
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
            className={classNames(className, 'hover:bg-gray-100 focus:z-50 focus:outline-indigo-500 aria-disabled:pointer-events-none aria-disabled:bg-white aria-disabled:text-gray-400')}
            tabIndex={disabled ? -1 : undefined}
        >
            <div className='flex items-center gap-2'>
                {icon && <Icon type={icon} size='sm' color='inherit' />}
                <div>{label}</div>
            </div>
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
                className={classNames(className, 'flex items-center justify-between gap-10 hover:bg-gray-100 focus:z-50 focus:outline-indigo-500 disabled:bg-white disabled:text-gray-400')}
            >
                <div className='flex items-center gap-2'>
                    {icon && <Icon type={icon} size='sm' color='inherit' />}
                    <div>{label}</div>
                </div>
                <Icon type='chevron-down' size='sm' color='inherit' />
            </button>
            <div aria-expanded={disabled ? false : open} className='hidden flex-col aria-expanded:flex'>
                {items.map(item => (
                    <LinkItem key={crypto.randomUUID()} {...item} className={classNames(className, 'pl-11')} />
                ))}
            </div>
        </>
    )
}

// type MenuItemDropdown = {
//     type: 'dropdown'
//     icon?: IconType
//     label: string
//     items: MenuItem[]
//     disabled?: boolean
// }

// const DropdownItem: React.FC<MenuItemDropdown & { className: string }> = ({
//     icon,
//     label,
//     items,
//     disabled = false,
//     className,
// }) => {
//     const [open, setOpen] = React.useState(false)

//     const _onClick = (detail: LinkDetail) => {
//         detail.event.preventDefault()
//         setOpen(!open)
//     }

//     return (
//         <Tooltip
//             control={open}
//             align='right-top'
//             variant='custom'
//             controller={
//                 <LinkItem
//                     type='link'
//                     icon={icon}
//                     label={label}
//                     href='#'
//                     disabled={disabled}
//                     onClick={_onClick}
//                     className='px-4 py-2'
//                 />
//             }
//         >
//             <MenuItems items={items} />
//         </Tooltip>
//     )
// }
