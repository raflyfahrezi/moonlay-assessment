import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import People from './index'

test('Render People Module', () => {
    render(
        <BrowserRouter>
            <People />
        </BrowserRouter>
    )
})
