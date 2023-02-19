import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box, Button, ButtonDropdown, Checkbox, Icon, Input, Link, MenuItem, MenuItems, RadioGroup, Sidebar, Switch, Textarea, Tooltip, TooltipAlign } from './components'
import { IconType } from './internal/icons'

const App = () => {
    const [v1, setV1] = React.useState('')
    const [checked, setChecked] = React.useState(false)
    const [switched, setSwitched] = React.useState(false)

    const [tooltip, setTooltip] = React.useState<TooltipAlign>('right')

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <div className='flex h-screen w-screen overflow-hidden'>
                            <div className='sticky top-0 h-full'>
                                <Sidebar title='Hello there'>
                                    <MenuItems items={menuItems} />
                                </Sidebar>
                            </div>

                            <div className='flex flex-col'>
                                <div className='sticky top-0'>
                                    <div className='flex h-16 w-full bg-red-50'>Hello there</div>
                                </div>

                                <div className='w-full'>
                                    <IconShowcase />
                                    <Box margin={{ b: '3xl' }}>
                                        Hello there long long long long long long long long long long long long long long long long long long long long long long long long long long long long long
                                        long long long long long long long long long long long long long
                                    </Box>
                                    <Box variant='sub'>Subscript text</Box>
                                </div>
                            </div>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App

const IconShowcase = () => {
    const types: IconType[] = [
        'adjustments',
        'arrow-down',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'burger',
        'bell',
        'bell-slash',
        'bookmark',
        'bookmark-slash',
        'calender',
        'cart',
        'chat-bubble',
        'check',
        'check-circle',
        'chevron-down',
        'chevron-left',
        'chevron-right',
        'chevron-up',
        'chevron-up-down',
        'clipboard',
        'close',
        'close-circle',
        'code-block',
        'code-bracket',
        'command-line',
        'copy',
        'document',
        'download',
        'edit',
        'ellipsis',
        'ellipsis-circle',
        'ellipsis-vertical',
        'exclamation',
        'eye',
        'eye-slash',
        'expand',
        'external',
        'fingerprint',
        'folder',
        'filter',
        'flag',
        'heart',
        'home',
        'info',
        'link',
        'list',
        'lock',
        'magnify',
        'map',
        'map-pin',
        'microphone',
        'plane',
        'minus',
        'minus-circle',
        'plus',
        'plus-circle',
        'printer',
        'puzzle',
        'qr',
        'question',
        'queue',
        'settings',
        'share',
        'sound',
        'silent',
        'stack',
        'star',
        'table',
        'trash',
        'unlock',
        'user',
        'user-circle',
        'users',
        'upload',
        'warning',
    ]
    return (
        <Box>
            {types.map(type => (
                <Icon type={type} key={crypto.randomUUID()} />
            ))}
        </Box>
    )
}

const menuItems: MenuItem[] = [
    {
        type: 'link',
        label: 'First option option option',
    },
    {
        type: 'link',
        label: 'First option option option',
    },
    {
        type: 'divider',
    },
    {
        type: 'link',
        label: 'First option option option',
    },
    {
        type: 'link',
        label: 'Another option ooptions',
        icon: 'warning',
        href: '/',
        onClick: detail => detail.event.preventDefault(),
    },
    {
        type: 'link',
        label: 'First option option option',
    },
    {
        type: 'link',
        label: 'First option option option',
    },
    {
        type: 'link',
        label: 'First option option option',
    },
    {
        type: 'expandable',
        icon: 'bell',
        label: 'Expand is oversized',
        defaultOpen: true,
        disabled: false,
        items: [
            {
                type: 'link',
                label: 'Optional link that is too long long long',
                href: '#',
                disabled: true,
                onClick: detail => detail.event.preventDefault(),
            },
            {
                type: 'link',
                label: 'Optional wwwwww',
                href: '#',
                onClick: detail => detail.event.preventDefault(),
            },
        ],
    },
    {
        type: 'button',
        label: 'A button in the dropdown',
        disabled: true,
    },
    {
        type: 'button',
        label: 'A button in the dropdown',
        color: 'error',
    },
    {
        type: 'link',
        label: 'First option option option',
    },
]
