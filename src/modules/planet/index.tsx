import React from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import { IPlanet } from '@/store'
import { useStore } from '@/hooks'
import {
    Card,
    Header,
    Search,
    Wrapper,
    CardWrapper,
    ModuleWrapper,
} from '@/components'

const PlanetModule = () => {
    const store = useStore()

    const formattedNumberOfString = (number: string) => {
        return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    return (
        <Wrapper>
            <Header title='People' />
            <ModuleWrapper>
                <Search />
                <CardWrapper>
                    {toJS(store.planet).map((planet: IPlanet) => {
                        const { id, name, population } = planet

                        const description = `This planet has a population of ${formattedNumberOfString(
                            population
                        )}.`

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

export default observer(PlanetModule)
