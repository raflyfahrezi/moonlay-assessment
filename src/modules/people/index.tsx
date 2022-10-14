/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import { IPeople } from '@/store'
import { useStore } from '@/hooks'
import { Card, Header, Search, Wrapper, ModuleWrapper } from '@/components'

import { peopleCardBoxClassName } from './styles'

const PeopleModule = () => {
    const store = useStore()

    return (
        <Wrapper>
            <Header title='People' />
            <ModuleWrapper>
                <Search />
                <div className={peopleCardBoxClassName}>
                    {toJS(store.people).map((person: IPeople) => {
                        const { id, name, gender, starships, birth_year } =
                            person

                        const description = `has ${starships.length} starships and was born in ${birth_year}.`

                        return (
                            <Card
                                key={id}
                                title={name}
                                titleSpan={gender}
                                description={description}
                            />
                        )
                    })}
                </div>
            </ModuleWrapper>
        </Wrapper>
    )
}

export default observer(PeopleModule)
