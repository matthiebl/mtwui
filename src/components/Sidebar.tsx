import React from 'react'
import { classNames } from '../internal/class-compiler'
import { Box } from './Box'

export interface SidebarProps {
    // Properties
    title?: string

    // Slots
    children?: React.ReactNode
}

export const Sidebar: React.FC<SidebarProps> = ({ title, children }) => {
    const widthStyles = 'hidden lg:block w-72'
    // 'w-48 md:w-52 lg:w-60 xl:w-72 2xl:w-80'
    return (
        <div className={classNames('flex max-h-full min-h-full flex-col overflow-hidden overflow-y-auto border-r border-gray-200 bg-white', widthStyles)}>
            {title && (
                <Box variant='h5' padding={{ x: 'lg', y: 'lg' }}>
                    {title}
                </Box>
            )}
            {children}
        </div>
    )
}
