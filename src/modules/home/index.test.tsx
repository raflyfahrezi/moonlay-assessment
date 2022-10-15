import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Home from './index'

test('Render Home Module', () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
})
