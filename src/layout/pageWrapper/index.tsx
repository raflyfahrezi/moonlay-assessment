import React from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'

import Footer from '../footer'
import { PageWrapperProps } from './types'

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <>
            <Helmet>
                <title>Moonlay Assessment</title>
            </Helmet>
            <div className='w-full min-h-screen grid grid-rows-pageWrapper'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <main>{children}</main>
                </motion.div>
                <Footer />
            </div>
        </>
    )
}

export default PageWrapper
