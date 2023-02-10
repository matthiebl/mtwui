import React from 'react'
import { classNames } from '../internal/class-compiler'

type InputDetail = {
    event: any
    value: string
    lastValue: string
}

export interface InputProps {
    // Properties
    value: string
    placeholder?: string
    readOnly?: boolean
    required?: boolean
    type?: 'text' | 'email' | 'password' | 'number'
    fullWidth?: boolean

    // Events
    onChange?: (detail: InputDetail) => any
}

export const Input: React.FC<InputProps> = ({ value, placeholder, readOnly = false, required = false, type = 'text', fullWidth = false, onChange }) => {
    const id = crypto.randomUUID()

    const _onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        if (onChange) {
            onChange({
                event,
                value: event.target.value,
                lastValue: value,
            })
        }
    }

    return (
        <div>
            <label htmlFor={id} className='sr-only'>
                {placeholder || `${type} input`}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                readOnly={readOnly}
                required={required}
                onChange={_onChange}
                onWheel={event => event.currentTarget.blur()}
                className={classNames(
                    fullWidth ? 'w-full' : 'w-80',
                    'max-w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500',
                )}
            />
        </div>
    )
}
