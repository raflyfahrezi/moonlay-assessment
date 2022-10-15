import React from 'react'

import { CardProps } from './types'
import {
    cardClassName,
    cardTitleClassName,
    cardButtonClassName,
    cardContentClassName,
    cardTitleSpanClassName,
    cardDescriptionClassName,
    cardButtonDeleteClassName,
    cardButtonDetailsClassName,
} from './styles'

const Card = ({
    title,
    titleSpan,
    description,
    deleteCard,
    openDetails,
}: CardProps) => {
    return (
        <div className={cardClassName}>
            <div className={cardContentClassName}>
                <p className={cardTitleClassName}>
                    {title}{' '}
                    {titleSpan && (
                        <span className={cardTitleSpanClassName}>
                            {titleSpan}
                        </span>
                    )}
                </p>
                <p className={cardDescriptionClassName}>{description}</p>
            </div>
            <div className={cardButtonClassName}>
                <button
                    type='button'
                    onClick={openDetails}
                    className={cardButtonDetailsClassName}
                >
                    Open Details
                </button>
                <button
                    type='button'
                    onClick={deleteCard}
                    className={cardButtonDeleteClassName}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Card
