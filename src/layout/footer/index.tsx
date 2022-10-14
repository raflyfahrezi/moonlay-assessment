import React from 'react'

import { Wrapper } from '@/components'

import { footerClassName } from './styles'

const Footer = () => {
    return (
        <Wrapper>
            <footer>
                <p className={footerClassName}>
                    Created by Farhan Rafly Fahrezi S (2022) for Moonlay
                    Assessment
                </p>
            </footer>
        </Wrapper>
    )
}

export default Footer
