import { ReactNode, HTMLAttributes } from 'react'

export type ButtonType = 'button' | 'submit' | 'reset'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    type?: ButtonType
}
