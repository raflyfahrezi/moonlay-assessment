import { types, Instance } from 'mobx-state-tree'

export const Planet = types.model('Planet', {
    id: types.identifier,
    name: types.string,
    population: types.string,
})

export interface IPlanet extends Instance<typeof Planet> {}
