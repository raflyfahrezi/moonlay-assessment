import { types, Instance } from 'mobx-state-tree'

export const Starships = types.model('Starships', {
    id: types.identifier,
    name: types.string,
    model: types.string,
    manufacturer: types.string,
})

export interface IStarships extends Instance<typeof Starships> {}
