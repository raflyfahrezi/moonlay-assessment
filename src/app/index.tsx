/* eslint-disable react-hooks/exhaustive-deps */

import { useStore } from '@/hooks'
import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { PageWrapper } from '@/layout'

import { router } from './helpers'

const App = () => {
    const store = useStore()

    const fetchData = async () => {
        await store.getPeople()
        await store.getPlanets()
        await store.getStarships()
    }

    useEffect(() => {
        fetchData()
    }, [store])

    return (
        <PageWrapper>
            <RouterProvider router={router} />
        </PageWrapper>
    )
}

export default App
