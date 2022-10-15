import { IPeople } from '@/store'

export interface FormProps {
    modalClose: () => void
    person?: IPeople
}

export interface IFormData {
    id: string
    name: string
    birth_year: string
    gender: string
    homeworld: string
    starships: string[]
}
