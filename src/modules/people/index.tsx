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
                        return <Card key={person.name} {...person} />
                    })}
                </div>
            </ModuleWrapper>
        </Wrapper>
    )
}

export default observer(PeopleModule)
