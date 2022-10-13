import React from 'react'
import { Helmet } from 'react-helmet'

import { PageWrapperProps } from './types'

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <>
            <Helmet>
                <title>React Typescript</title>
            </Helmet>
            <div>{children}</div>
        </>
    )
}

export default PageWrapper
