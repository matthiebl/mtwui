import React from 'react'

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

    // Events
    onChange?: (detail: InputDetail) => any
}

export const Textarea: React.FC<TextareaProps> = ({ value, placeholder, readOnly = false, required = false, rows = 3, onChange }) => {
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

    return <textarea value={value} placeholder={placeholder} readOnly={readOnly} required={required} rows={rows} onChange={_onChange} />
}
