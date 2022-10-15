import { IPlanet } from '@/store'

export interface FormProps {
    planet?: IPlanet
    modalClose: () => void
}

export interface IFormData {
    id: string
    name: string
    population: string
}
