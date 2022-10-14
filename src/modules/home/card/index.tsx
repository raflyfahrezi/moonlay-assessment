import React from 'react'
import { Link } from 'react-router-dom'

import { CardProps } from './types'
import { CardClassName, CardLinkClassName } from './styles'

const Card = ({ title, link, icon }: CardProps) => {
    return (
        <Link to={link} className={CardLinkClassName}>
            <div className={CardClassName}>
                {icon}
                <p>{title}</p>
            </div>
        </Link>
    )
}

export default Card
