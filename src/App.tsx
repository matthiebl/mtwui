import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box, Button, Checkbox, Icon, Input, Link, RadioGroup } from './components'
import { IconType } from './internal/icons'

const App = () => {
    const [v1, setV1] = React.useState('')
    const [checked, setChecked] = React.useState(false)

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <Box variant='h1'>Heading 1</Box>
                            <Box variant='h2'>Heading 2</Box>
                            <Box variant='h3'>Heading 3</Box>
                            <Box variant='h4'>Heading 4</Box>
                            <Box variant='h5'>Heading 5</Box>
                            <Box variant='p'>
                                <Icon type='warning' /> Normal text <Icon type='edit' />
                            </Box>
                            <Box>
                                <Button>Hello</Button>
                                <Button variant='outline' icon='edit' disabled>
                                    Hello
                                </Button>
                                <Button color='error' icon='warning' disabled fullWidth onClick={() => console.log('hello')}>
                                    Hello
                                </Button>
                                <Button color='success'>Hello</Button>
                                <Button color='warning' icon='warning' disabled />
                                <Button variant='outline' color='primary'>
                                    This is an outlined button
                                </Button>
                                <Button variant='outline' icon='close'></Button>
                            </Box>
                            <Box variant='p'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquam ullam, perferendis id commodi alias minima rerum repellendus perspiciatis veritatis ea quo
                                maiores unde, eius labore quia doloribus quod praesentium facere numquam voluptates temporibus. Officiis, provident corporis! Rerum pariatur ad, eos sit mollitia id
                                ipsam nostrum ex minima modi rem reiciendis consectetur! Nihil id, blanditiis vitae ratione ipsam, culpa qui tempore molestias hic ipsum amet iusto voluptates
                                voluptatum modi nostrum facere{' '}
                                <Link href='#' icon='adjustments' color='link' disabled>
                                    External
                                </Link>{' '}
                                repudiandae eligendi, debitis placeat. Iste nesciunt nobis, incidunt praesentium expedita aliquam omnis. Voluptatibus doloribus error quisquam fugiat corporis
                                repudiandae architecto autem vero vitae dolores, aperiam nulla accusamus eveniet iste, placeat non illum? Excepturi similique culpa natus corrupti praesentium sit. Quia
                                velit quod tempore nesciunt{' '}
                                <Link variant='internal' href='#' icon='adjustments' color='primary'>
                                    Inernal Link
                                </Link>{' '}
                                nam enim ab in. Accusamus quas repellendus numquam nostrum, quod deserunt iste. Aut, animi eveniet fugiat saepe eius tempore dolorem a laboriosam quo, nam, inventore
                                vero magnam recusandae! Quidem laudantium nisi veritatis, blanditiis cumque officia animi quae commodi minus, molestias dolor voluptates eaque adipisci eos earum
                                placeat accusantium maiores provident nulla enim. Rerum sequi debitis impedit. Perferendis accusantium ea vel corrupti saepe itaque. Placeat voluptatem quisquam culpa
                                ratione alias perspiciatis excepturi, nesciunt voluptas ad nulla repellendus minus quas quaerat soluta. Commodi facilis nulla alias ullam!
                            </Box>
                            <Input type='number' value={v1} placeholder='Email address' onChange={detail => setV1(detail.value)} />
                            <Checkbox checked={checked} onChange={detail => setChecked(detail.checked)} label='Remember me?' />
                            <Checkbox disabled checked={checked} onChange={detail => setChecked(detail.checked)} label='Remember me?' />

                            <RadioGroup
                                value={null}
                                items={[
                                    {
                                        value: 'one',
                                        label: 'One',
                                        description: 'This is option 1',
                                    },
                                    {
                                        value: 'two',
                                        label: 'Two',
                                        // description: 'This is option 2',
                                    },
                                    {
                                        value: 'three',
                                        label: 'Three',
                                        // description: 'This is option 3',
                                    },
                                ]}
                            />

                            <IconShowcase />
                            <Box margin={{ b: 'xs' }}></Box>
                            <Box variant='sub'>Subscript text</Box>
                        </>
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
