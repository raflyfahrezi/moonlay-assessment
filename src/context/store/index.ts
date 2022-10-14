import { createContext } from 'react'

import { Root, IRoot } from '@/store'

const store = Root.create({
    people: [],
})
const storeContext = createContext<IRoot | null>(store)

export { store, storeContext }
