import React from 'react'

import { CardWrapperProps } from './types'
import { cardWrapperClassName } from './styles'

const CardWrapper = ({ children }: CardWrapperProps) => {
    return <div className={cardWrapperClassName}>{children}</div>
}

export default CardWrapper
