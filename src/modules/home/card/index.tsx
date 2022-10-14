import React from 'react'

import { CardProps } from './types'
import { CardClassName } from './styles'

const Card = ({ title, icon }: CardProps) => {
    return (
        <div className={CardClassName}>
            {icon}
            <p>{title}</p>
        </div>
    )
}

export default Card
