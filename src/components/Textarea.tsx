import React from 'react'
import { classNames } from '../internal/class-compiler'

type InputDetail = {
    event: any
    value: string
    lastValue: string
}

export interface TextareaProps {
    // Properties
    value: string
    placeholder?: string
    readOnly?: boolean
    required?: boolean
    rows?: number
    fullWidth?: boolean

    // Events
    onChange?: (detail: InputDetail) => any
}

export const Textarea: React.FC<TextareaProps> = ({ value, placeholder, readOnly = false, required = false, rows = 3, fullWidth = false, onChange }) => {
    const id = crypto.randomUUID()

    const _onChange: React.ChangeEventHandler<HTMLTextAreaElement> = event => {
        if (onChange) {
            onChange({
                event,
                value: event.target.value,
                lastValue: value,
            })
        }
    }

    return (
        <textarea
            value={value}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            rows={rows}
            onChange={_onChange}
            className={classNames(
                fullWidth ? 'w-full' : 'w-80',
                'max-w-full resize appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500',
            )}
        />
    )
}
