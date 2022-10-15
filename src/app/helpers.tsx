import { createBrowserRouter } from 'react-router-dom'

import { PageWrapper } from '@/layout'
import {
    HomeModule,
    PeopleModule,
    PlanetModule,
    StarshipModule,
} from '@/modules'

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <PageWrapper>
                <HomeModule />
            </PageWrapper>
        ),
    },
    {
        path: '/people',
        element: (
            <PageWrapper>
                <PeopleModule />
            </PageWrapper>
        ),
    },
    {
        path: '/planets',
        element: (
            <PageWrapper>
                <PlanetModule />
            </PageWrapper>
        ),
    },
    {
        path: '/starships',
        element: (
            <PageWrapper>
                <StarshipModule />
            </PageWrapper>
        ),
    },
])
