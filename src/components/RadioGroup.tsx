import React from 'react'

type RadioGroupItem = {
    value: string
    label: string
    description?: string
    disabled?: boolean
}

type RadioGroupDetail = {
    event: any
    value: string
    label: string
}

export interface RadioGroupProps {
    // Properties
    name?: string
    value: string | null
    items?: RadioGroupItem[]

    // Events
    onChange?: (detail: RadioGroupDetail) => any
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ name = crypto.randomUUID(), value, items = [], onChange }) => {
    return (
        <div className='flex flex-col gap-1.5'>
            {items.map(item => {
                const id = crypto.randomUUID()
                return (
                    <div className='flex gap-2 text-sm'>
                        <input id={id} name={name} type='radio' value={item.value} disabled={item.disabled || false} className='mt-0.5' />
                        <div className='flex flex-col'>
                            <label htmlFor={id} className='text-gray-900'>
                                {item.label}
                            </label>
                            {item.description && <span className='text-gray-500'>{item.description}</span>}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
