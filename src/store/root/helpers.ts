import { axiosGet } from '@/utils'
import { IPeople, IPlanet, IStarships } from '@/store'

export const fetchPeople = async () => {
    try {
        const { data } = await axiosGet('/people', {})

        const cleaned = data.results.map((person: IPeople): IPeople => {
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

export const fetchPlanet = async () => {
    try {
        const { data } = await axiosGet('/planets', {})

        const cleaned = data.results.map((planet: IPlanet): IPlanet => {
            return {
                name: planet.name,
                population: planet.population,
            }
        })

        return cleaned
    } catch (error) {
        return []
    }
}

export const fetchStarships = async () => {
    try {
        const { data } = await axiosGet('/starships', {})

        const cleaned = data.results.map((starship: IStarships): IStarships => {
            return {
                name: starship.name,
                model: starship.model,
                manufacturer: starship.manufacturer,
            }
        })

        return cleaned
    } catch (error) {
        return []
    }
}
