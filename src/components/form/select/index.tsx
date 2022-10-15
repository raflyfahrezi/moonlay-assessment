import React, { forwardRef } from 'react'

import { SelectProps } from './types'

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ label, children, placeholder, ...props }: SelectProps, ref) => {
        return (
            <div className='w-full flex flex-col gap-2'>
                {label && (
                    <label className='text-gray-200 text-sm'>{label}</label>
                )}
                <select
                    ref={ref}
                    className='w-full px-4 py-2 text-base border-2 border-gray-600 rounded bg-gray-900 outline-0 text-gray-200 transition-all focus:border-gray-200'
                    {...props}
                >
                    <option value='' selected disabled>
                        {placeholder}
                    </option>
                    {children}
                </select>
            </div>
        )
    }
)

export default Select
