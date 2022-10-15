export interface FormProps {
    modalClose: () => void
}

export interface IFormData {
    id: string
    name: string
    birth_year: string
    gender: string
    homeworld: string
    starships: string[]
}
