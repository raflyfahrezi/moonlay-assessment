import React from 'react'

import { CardProps } from './types'
import {
    cardClassName,
    cardTitleClassName,
    cardTitleSpanClassName,
} from './styles'

const Card = ({
    name,
    gender,
    homeworld,
    starships,
    birth_year,
}: CardProps) => {
    return (
        <div className={cardClassName}>
            <p className={cardTitleClassName}>
                {name} <span className={cardTitleSpanClassName}>{gender}</span>
            </p>
            <p>{starships.length} starships</p>
        </div>
    )
}

export default Card
