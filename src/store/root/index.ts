import { flow, types, Instance } from 'mobx-state-tree'

import { People } from '@/store'
import { peopleSchema } from '@/utils'

import { fetchPeople } from './helpers'

export const Root = types
    .model('Root', {
        people: types.optional(types.array(People), []),
    })
    .actions((self) => {
        const getPeople = flow(function* () {
            const people = yield fetchPeople()

            if (people.length > 0) {
                const isValid = yield peopleSchema.isValid(people[0])

                if (isValid) {
                    self.people.splice(0, self.people.length)

                    people.forEach((person: any) => {
                        self.people.push(People.create(person))
                    })
                }
            }
        })

        return { getPeople }
    })

export interface IRoot extends Instance<typeof Root> {}
