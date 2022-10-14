import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { BackIcon } from '@/assets'

import { HeaderProps } from './types'
import {
    HeaderClassName,
    HeaderTitleClassName,
    HeaderBackBoxClassName,
    HeaderEmptyBoxClassName,
    HeaderTitleBoxClassName,
    HeaderBackButtonClassName,
} from './styles'

const Header = ({ title }: HeaderProps) => {
    const navigate = useNavigate()

    const backButtonHandler = () => {
        navigate('/')
    }

    return (
        <div className={HeaderClassName}>
            <div className={HeaderBackBoxClassName}>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={backButtonHandler}
                    className={HeaderBackButtonClassName}
                >
                    <BackIcon />
                </motion.button>
            </div>
            <div className={HeaderTitleBoxClassName}>
                <p className={HeaderTitleClassName}>{title}</p>
            </div>
            <div className={HeaderEmptyBoxClassName}></div>
        </div>
    )
}

export default Header
