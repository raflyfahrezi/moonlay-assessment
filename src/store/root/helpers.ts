import { IPeople } from '@/store'
import { axiosGet } from '@/utils'

export const fetchPeople = async () => {
    try {
        const { data } = await axiosGet('/people', {})

        const cleaned = data.results.map((person: any): IPeople => {
            return {
                name: person.name,
                birth_year: person.birth_year,
                gender: person.gender,
                homeworld: person.homeworld,
                starships: person.starships,
            }
        })

        return cleaned
    } catch (error) {
        return []
    }
}
