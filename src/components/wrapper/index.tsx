import React from 'react'

import { WrapperProps } from './types'
import { wrapperClassName } from './styles'

const Wrapper = ({ children }: WrapperProps) => {
    return <div className={wrapperClassName}>{children}</div>
}

export default Wrapper
