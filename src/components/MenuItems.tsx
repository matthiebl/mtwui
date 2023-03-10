import React from 'react'
import { classNames } from '../internal/class-compiler'
import { IconType } from '../internal/icons'
import { Button, ButtonColor, ButtonDetail, ButtonVariant } from './Button'
import { Icon } from './Icon'
import { LinkDetail } from './Link'

export type MenuItem = MenuItemDivider | MenuItemLink | MenuItemButton | MenuItemExpandable /*| MenuItemDropdown*/

export interface MenuItemsProps {
    // Properties
    items: MenuItem[]
}

export const MenuItems: React.FC<MenuItemsProps> = ({ items }) => {
    return (
        <div className='flex flex-col text-sm text-gray-900'>
            {items.map(item => {
                const key = crypto.randomUUID()

                switch (item.type) {
                    case 'divider':
                        return <div key={key} className='my-2 w-full border-t border-gray-100' />
                    case 'link':
                        return <LinkItem key={key} {...item} />
                    case 'button':
                        return <ButtonItem key={key} {...item} />
                    case 'expandable':
                        return <ExpandableItem key={key} {...item} />
                    // case 'dropdown':
                    //     return <DropdownItem key={key} {...item} />
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
    href?: string
    target?: string
    disabled?: boolean
    onClick?: (detail: LinkDetail) => any
}

const LinkItem: React.FC<MenuItemLink & { className?: string }> = ({ icon, label, href, target, disabled = false, onClick, className = '' }) => {
    const _onClick: React.MouseEventHandler<HTMLAnchorElement> = event => {
        if (onClick) {
            onClick({
                href: href || '',
                target,
                event,
            })
        }
    }

    const Content = (
        <div className='flex h-5 w-full items-center gap-2'>
            {icon && (
                <div>
                    <Icon type={icon} size='sm' color='inherit' />
                </div>
            )}
            <div className='flex-grow truncate text-left'>{label}</div>
        </div>
    )

    if (href) {
        return (
            <a
                role='button'
                aria-disabled={disabled}
                href={href}
                target={target}
                onClick={event => {
                    if (onClick) {
                        onClick({
                            href: href || '',
                            target,
                            event,
                        })
                    }
                }}
                className={classNames(
                    className,
                    'py-2 px-4 hover:bg-gray-100 focus:z-50 focus:outline-indigo-500 aria-disabled:pointer-events-none aria-disabled:bg-white aria-disabled:text-gray-400',
                )}
                tabIndex={disabled ? -1 : undefined}
            >
                {Content}
            </a>
        )
    }

    return (
        <button
            disabled={disabled}
            onClick={event => {
                if (onClick) {
                    onClick({
                        href: href || '',
                        target,
                        event,
                    })
                }
            }}
            className={classNames(className, 'py-2 px-4 hover:bg-gray-100 focus:z-50 focus:outline-indigo-500 disabled:bg-white disabled:text-gray-400')}
            tabIndex={disabled ? -1 : undefined}
        >
            {Content}
        </button>
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
        <div className='py-2 px-4'>
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

const ExpandableItem: React.FC<MenuItemExpandable> = ({ icon, label, items, disabled = false, defaultOpen = false }) => {
    const [open, setOpen] = React.useState(defaultOpen)

    return (
        <>
            <button
                disabled={disabled}
                onClick={event => {
                    event.stopPropagation()
                    setOpen(!open)
                }}
                className='py-2 px-4 hover:bg-gray-100 focus:z-50 focus:outline-indigo-500 disabled:bg-white disabled:text-gray-400'
            >
                <div className='flex h-5 w-full items-center gap-2'>
                    {icon && (
                        <div>
                            <Icon type={icon} size='sm' color='inherit' />
                        </div>
                    )}
                    <div className='flex-grow truncate text-left'>{label}</div>
                    <div>
                        <Icon type='chevron-down' size='sm' color='inherit' />
                    </div>
                </div>
            </button>
            <div aria-expanded={disabled ? false : open} className='hidden flex-col aria-expanded:flex'>
                {items.map(item => (
                    <LinkItem key={crypto.randomUUID()} {...item} className='pl-11' />
                ))}
            </div>
        </>
    )
}

type MenuItemDropdown = {
    type: 'dropdown'
    icon?: IconType
    label: string
    items: MenuItem[]
    disabled?: boolean
}

const DropdownItem: React.FC<MenuItemDropdown> = ({ icon, label, items, disabled = false }) => {
    const [open, setOpen] = React.useState(false)

    const _onClick = (detail: LinkDetail) => {
        detail.event.preventDefault()
        setOpen(!open)
    }

    return (
        <div className='group relative flex h-fit w-full items-start'>
            <button disabled={disabled} className='w-full py-2 px-4 hover:bg-gray-100 focus:z-50 focus:outline-indigo-500 disabled:bg-white disabled:text-gray-400' onClick={() => setOpen(!open)}>
                <div className='flex h-5 w-full items-center gap-2'>
                    {icon && (
                        <div>
                            <Icon type={icon} size='sm' color='inherit' />
                        </div>
                    )}
                    <div className='flex-grow truncate text-left'>{label}</div>
                    <div>
                        <Icon type='chevron-right' size='sm' color='inherit' />
                    </div>
                </div>
            </button>
            <div aria-hidden={!open} className='absolute left-full z-50 w-max translate-x-2 -translate-y-2 aria-hidden:hidden'>
                <div className='rounded-md bg-white py-2 shadow'>
                    <MenuItems items={items} />
                </div>
            </div>
        </div>
    )
}
