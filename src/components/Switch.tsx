import React from 'react'
import { classNames } from '../internal/class-compiler'
import { CheckboxProps } from './Checkbox'

export const Switch: React.FC<CheckboxProps> = ({ label, checked = false, disabled = false, required = false, onChange }) => {
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
        <div className='relative flex items-center'>
            <input
                id={id}
                type='checkbox'
                checked={checked}
                disabled={disabled}
                required={required}
                onChange={_onChange}
                className='peer h-4 w-7 cursor-pointer rounded-full focus:ring-indigo-500 disabled:pointer-events-none'
            />
            <div className='pointer-events-none absolute h-4 w-7 rounded-full border-gray-300 bg-gray-300 peer-checked:bg-indigo-600 peer-disabled:border-gray-400 peer-disabled:bg-gray-400 peer-disabled:text-gray-400' />
            <div className='pointer-events-none absolute h-3 w-3 translate-x-0.5 rounded-full bg-white transition duration-150 peer-checked:translate-x-3.5 peer-disabled:bg-gray-100' />
            {label && (
                <label htmlFor={id} className='ml-2 text-sm text-gray-900'>
                    {label}
                </label>
            )}
        </div>
    )
}
