import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { CardProps } from './types'
import { CardTapAnimation } from './animations'
import { CardClassName, CardLinkClassName } from './styles'

const Card = ({ title, link, icon }: CardProps) => {
    return (
        <Link to={link} className={CardLinkClassName}>
            <motion.div whileTap={CardTapAnimation} className={CardClassName}>
                {icon}
                <p>{title}</p>
            </motion.div>
        </Link>
    )
}

export default Card
