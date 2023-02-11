import React from 'react'
import { classNames } from '../internal/class-compiler'
import { IconType } from '../internal/icons'
import { Icon } from './Icon'

type LinkColor = 'link' | 'primary' | 'inherit'

export type LinkDetail = {
    href: string
    target?: string
    event: any
}

export interface LinkProps {
    // Properties
    variant?: 'internal' | 'external'
    color?: LinkColor
    icon?: IconType
    href: string
    target?: string
    disabled?: boolean

    // Slots
    children?: React.ReactNode

    // Events
    onClick?: (detail: LinkDetail) => any
}

export const Link: React.FC<LinkProps> = ({ variant = 'external', color = 'link', icon, href, target, disabled = false, children, onClick }) => {
    const _onClick: React.MouseEventHandler<HTMLAnchorElement> = event => {
        if (onClick) {
            onClick({
                href,
                target,
                event,
            })
        }
    }

    const styles = classNames('inline-flex items-center underline-offset-2 hover:underline aria-disabled:pointer-events-none aria-disabled:text-gray-500', LinkColorStyles[color])

    if (variant === 'external') {
        return (
            <a aria-disabled={disabled} className={styles} href={href} target={target} onClick={_onClick}>
                {children}
                {icon && (
                    <>
                        {' '}
                        <Icon type={icon} size='sm' color='inherit' />
                    </>
                )}{' '}
                <Icon type='external' size='sm' color='inherit' />
            </a>
        )
    }

    return (
        <a role='button' aria-disabled={disabled} className={styles} href={href} onClick={_onClick}>
            {children}
            {icon && (
                <>
                    {' '}
                    <Icon type={icon} size='sm' color='inherit' />
                </>
            )}
        </a>
    )
}

const LinkColorStyles: Record<LinkColor, string> = {
    link: 'text-sky-500',
    primary: 'text-indigo-500',
    inherit: 'text-inherit',
}
