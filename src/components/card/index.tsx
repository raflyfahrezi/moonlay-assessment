import React from 'react'

import { CardProps } from './types'
import {
    cardClassName,
    cardTitleClassName,
    cardButtonClassName,
    cardContentClassName,
    cardTitleSpanClassName,
    cardDescriptionClassName,
} from './styles'

const Card = ({ title, titleSpan, description }: CardProps) => {
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
            <button type='button' className={cardButtonClassName}>
                Open Details
            </button>
        </div>
    )
}

export default Card
