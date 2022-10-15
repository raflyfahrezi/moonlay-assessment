import { ReactNode } from 'react'

export interface IModal {
    title: string
    isOpen: boolean
    children: ReactNode
}
