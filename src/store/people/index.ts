import { types, Instance } from 'mobx-state-tree'

export const People = types.model('People', {
    id: types.identifier,
    name: types.string,
    birth_year: types.string,
    gender: types.string,
    homeworld: types.string,
})

export interface IPeople extends Instance<typeof People> {}
