import React from 'react'
import { Helmet } from 'react-helmet'

import Footer from '../footer'
import { PageWrapperProps } from './types'

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <>
            <Helmet>
                <title>React Typescript</title>
            </Helmet>
            <div className='w-full min-h-screen grid grid-rows-pageWrapper'>
                <div>
                    <main>{children}</main>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default PageWrapper
