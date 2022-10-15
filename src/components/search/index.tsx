/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'

import { Input, Button } from '@/components'

import { SearchProps } from './types'

const Search = ({ value, onChange, onClick, placeholder }: SearchProps) => {
    return (
        <div className='flex justify-end gap-6'>
            {/* <Input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            /> */}
            <Button onClick={onClick}>Add new</Button>
        </div>
    )
}

export default Search
