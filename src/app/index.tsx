import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { PageWrapper } from '@/layout'
import {
    HomeModule,
    PeopleModule,
    PlanetModule,
    StarshipModule,
} from '@/modules'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeModule />,
    },
    {
        path: '/people',
        element: <PeopleModule />,
    },
    {
        path: '/planets',
        element: <PlanetModule />,
    },
    {
        path: '/starships',
        element: <StarshipModule />,
    },
])

const App = () => {
    return (
        <PageWrapper>
            <RouterProvider router={router} />
        </PageWrapper>
    )
}

export default App
