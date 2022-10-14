import React from 'react'

import { ButtonProps } from './types'

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button
            className='min-w-max bg-green-600 text-white text-base font-bold px-4 py-2 rounded transition-all active:scale-95'
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
