import { IStarships } from '@/store'

export interface FormProps {
    starship?: IStarships
    modalClose: () => void
}

export interface IFormData {
    id: string
    name: string
    model: string
    manufacturer: string
}
