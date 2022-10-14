import { useContext } from 'react'

import { IRoot } from '@/store'
import { storeContext } from '@/context'

const useStore = (): IRoot => {
    const store = useContext(storeContext)

    if (!store) {
        throw new Error('Store cannot be null, please add a context provider')
    }

    return store
}

export default useStore
