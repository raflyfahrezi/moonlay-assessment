import { types, Instance } from 'mobx-state-tree'

export const Planet = types.model('Planet', {
    name: types.string,
    population: types.string,
})

export interface IPlanet extends Instance<typeof Planet> {}
