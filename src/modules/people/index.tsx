/* eslint-disable react-hooks/exhaustive-deps */

import { toJS } from 'mobx'
import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { IPeople } from '@/store'
import { useStore } from '@/hooks'
import { Card, Header, Search, Wrapper, ModuleWrapper } from '@/components'

import { peopleCardBoxClassName } from './styles'

const PeopleModule = () => {
    const store = useStore()

    const fetchData = async () => {
        await store.getPeople()
    }

    useEffect(() => {
        fetchData()
    }, [store])

    useEffect(() => {
        console.log(toJS(store.people))
    }, [store.people])

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
