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

    return <input id={id} type='checkbox' checked={checked} disabled={disabled} required={required} onChange={_onChange} className='' />
}
