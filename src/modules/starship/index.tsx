import React from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import { useStore } from '@/hooks'
import { IStarships } from '@/store'
import {
    Card,
    Header,
    Search,
    Wrapper,
    CardWrapper,
    ModuleWrapper,
} from '@/components'

const StarshipModule = () => {
    const store = useStore()

    return (
        <Wrapper>
            <Header title='People' />
            <ModuleWrapper>
                <Search />
                <CardWrapper>
                    {toJS(store.starships).map((starship: IStarships) => {
                        const { id, name, model, manufacturer } = starship

                        const description = `This starship is a ${model} manufactured by ${manufacturer}.`

                        return (
                            <Card
                                key={id}
                                title={name}
                                description={description}
                            />
                        )
                    })}
                </CardWrapper>
            </ModuleWrapper>
        </Wrapper>
    )
}

export default observer(StarshipModule)
