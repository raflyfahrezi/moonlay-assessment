import { ReactNode, HTMLAttributes } from 'react'

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
    name?: string
    label?: string
    value?: string
    children: ReactNode
    placeholder?: string
}
