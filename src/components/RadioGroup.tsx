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
    const _onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        if (onChange) {
            onChange({
                event,
                value: event.target.value,
            })
        }
    }

    return (
        <div className='flex flex-col gap-0.5'>
            {items.map(item => {
                const id = crypto.randomUUID()
                return (
                    <div key={id} className='flex gap-2 text-sm'>
                        <input
                            id={id}
                            name={name}
                            type='radio'
                            value={item.value}
                            checked={item.value === value}
                            disabled={item.disabled || false}
                            onChange={_onChange}
                            className='mt-0.5 h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-500 disabled:pointer-events-none disabled:border-gray-400 disabled:bg-gray-400 disabled:text-gray-400'
                        />
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
