/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { RouterProvider } from 'react-router-dom'

import { useStore } from '@/hooks'

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
        <AnimatePresence exitBeforeEnter>
            <RouterProvider router={router} />
        </AnimatePresence>
    )
}

export default App
