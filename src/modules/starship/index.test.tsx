import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Starship from './index'

test('Render Starship Module', () => {
    render(
        <BrowserRouter>
            <Starship />
        </BrowserRouter>
    )
})
