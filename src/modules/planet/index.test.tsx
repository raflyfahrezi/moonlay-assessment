import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Planet from './index'

test('Render Planet Module', () => {
    render(
        <BrowserRouter>
            <Planet />
        </BrowserRouter>
    )
})
