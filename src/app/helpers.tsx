import { createBrowserRouter } from 'react-router-dom'

import {
    HomeModule,
    PeopleModule,
    PlanetModule,
    StarshipModule,
} from '@/modules'

export const router = createBrowserRouter([
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
