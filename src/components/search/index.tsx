import React from 'react'

import { Input, Button } from '@/components'

const Search = () => {
    return (
        <div className='flex gap-6'>
            <Input placeholder='Search' />
            <Button>Add new</Button>
        </div>
    )
}

export default Search
