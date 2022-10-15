import { flow, types, Instance } from 'mobx-state-tree'

import { People, Planet, Starships, IPeople } from '@/store'
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

        return { getPeople, getPlanets, getStarships, addPeople }
    })

export interface IRoot extends Instance<typeof Root> {}
