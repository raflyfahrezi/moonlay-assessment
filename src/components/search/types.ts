import { FormEvent } from 'react'

export interface SearchProps {
    value: string
    placeholder: string
    onClick: () => void
    onChange: (event: FormEvent<HTMLInputElement>) => void
}
