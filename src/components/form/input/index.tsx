import React from 'react'

import { InputProps } from './types'

const Input = ({ ...props }: InputProps) => {
    return (
        <input
            className='w-full px-4 py-2 text-base border-2 border-gray-600 rounded bg-transparent outline-0 text-gray-200 transition-all focus:border-gray-200'
            {...props}
        />
    )
}

export default Input
