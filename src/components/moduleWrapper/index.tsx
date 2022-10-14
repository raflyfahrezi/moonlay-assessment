import React from 'react'

import { ModuleWrapperProps } from './types'
import { ModuleWrapperClassName } from './styles'

const ModuleWrapper = ({ children }: ModuleWrapperProps) => {
    return <div className={ModuleWrapperClassName}>{children}</div>
}

export default ModuleWrapper
