import React from 'react'

type CheckboxDetail = {
    event: any
    checked: boolean
}

export interface CheckboxProps {
    // Properties
    label?: string
    checked?: boolean
    disabled?: boolean
    required?: boolean

    // Events
    onChange?: (detail: CheckboxDetail) => any
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false, disabled = false, required = false, onChange }) => {
    const id = crypto.randomUUID()

    const _onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        if (onChange) {
            onChange({
                event,
                checked: event.target.checked,
            })
        }
    }

    return (
        <div className='flex items-center'>
            <input
                id={id}
                type='checkbox'
                checked={checked}
                disabled={disabled}
                required={required}
                onChange={_onChange}
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 disabled:border-gray-400 disabled:bg-gray-400 disabled:text-gray-400'
            />
            {label && (
                <label htmlFor={id} className='ml-2 text-sm text-gray-900'>
                    {label}
                </label>
            )}
        </div>
    )
}
