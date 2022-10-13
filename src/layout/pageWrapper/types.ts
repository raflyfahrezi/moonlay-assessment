import { ReactNode, HTMLAttributes } from 'react'

export type PageWrapperProps = {
    children: ReactNode
} & HTMLAttributes<HTMLDivElement>
