import { flow, types, Instance } from 'mobx-state-tree'

import {
    People,
    Planet,
    Starships,
    IPeople,
    IPlanet,
    IStarships,
} from '@/store'
import { peopleSchema, planetSchema, starshipSchema } from '@/utils'

import { fetchPeople, fetchPlanet, fetchStarships } from './helpers'

export const Root = types
    .model('Root', {
        people: types.optional(types.array(People), []),
        planet: types.optional(types.array(Planet), []),
        starships: types.optional(types.array(Starships), []),
    })
    .actions((self) => {
        const getPeople = flow(function* () {
            const people = yield fetchPeople()

            if (people.length > 0) {
                const isValid = yield peopleSchema.isValid(people[0])

                if (isValid) {
                    self.people.splice(0, self.people.length)

                    people.forEach((person: IPeople) => {
                        self.people.push(People.create(person))
                    })
                }
            }
        })

        const getPlanets = flow(function* () {
            const planet = yield fetchPlanet()

            if (planet.length > 0) {
                const isValid = yield planetSchema.isValid(planet[0])

                if (isValid) {
                    self.planet.splice(0, self.planet.length)

                    planet.forEach((planet: any) => {
                        self.planet.push(Planet.create(planet))
                    })
                }
            }
        })

        const getStarships = flow(function* () {
            const starships = yield fetchStarships()

            if (starships.length > 0) {
                const isValid = yield starshipSchema.isValid(starships[0])

                if (isValid) {
                    self.starships.splice(0, self.starships.length)

                    starships.forEach((starship: any) => {
                        self.starships.push(Starships.create(starship))
                    })
                }
            }
        })

        const addPeople = (person: IPeople) => {
            self.people.push(People.create(person))
        }

        const addPlanet = (planet: IPlanet) => {
            self.planet.push(Planet.create(planet))
        }

        const addStarship = (starship: IStarships) => {
            self.starships.push(Starships.create(starship))
        }

        const getOnePeople = (id: string) => {
            return self.people.find((person) => person.id === id)
        }

        const getOnePlanet = (id: string) => {
            return self.planet.find((planet) => planet.id === id)
        }

        const getOneStarship = (id: string) => {
            return self.starships.find((starship) => starship.id === id)
        }

        const updatePeople = (person: IPeople) => {
            const index = self.people.findIndex((p) => p.id === person.id)

            self.people[index] = person
        }

        const updatePlanet = (planet: IPlanet) => {
            const index = self.planet.findIndex((p) => p.id === planet.id)

            self.planet[index] = planet
        }

        const updateStarship = (starship: IStarships) => {
            const index = self.starships.findIndex((s) => s.id === starship.id)

            self.starships[index] = starship
        }

        const deletePeople = (id: string) => {
            const index = self.people.findIndex((person) => person.id === id)

            self.people.splice(index, 1)
        }

        const deletePlanet = (id: string) => {
            const index = self.planet.findIndex((planet) => planet.id === id)

            self.planet.splice(index, 1)
        }

        const deleteStarship = (id: string) => {
            const index = self.starships.findIndex(
                (starship) => starship.id === id
            )

            self.starships.splice(index, 1)
        }

        return {
            getPeople,
            getPlanets,
            getStarships,
            addPeople,
            addPlanet,
            addStarship,
            getOnePeople,
            getOnePlanet,
            getOneStarship,
            updatePeople,
            updatePlanet,
            updateStarship,
            deletePeople,
            deletePlanet,
            deleteStarship,
        }
    })

export interface IRoot extends Instance<typeof Root> {}
