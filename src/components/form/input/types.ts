import { HTMLAttributes } from 'react'

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    name?: string
    label?: string
    value?: string
    placeholder?: string
}
