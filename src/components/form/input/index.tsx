import React, { forwardRef } from 'react'

import { InputProps } from './types'

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, ...props }: InputProps, ref) => {
        return (
            <div className='w-full flex flex-col gap-2'>
                {label && (
                    <label className='text-gray-200 text-sm'>{label}</label>
                )}
                <input
                    ref={ref}
                    className='w-full px-4 py-2 text-base border-2 border-gray-600 rounded bg-transparent outline-0 text-gray-200 transition-all focus:border-gray-200'
                    {...props}
                />
            </div>
        )
    }
)

export default Input
