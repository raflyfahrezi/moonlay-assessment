/* eslint-disable react-hooks/exhaustive-deps */

import { toJS } from 'mobx'
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'

import { IModal } from '@/models'
import { IPeople } from '@/store'
import { useStore } from '@/hooks'
import {
    Card,
    Modal,
    Header,
    Search,
    Wrapper,
    CardWrapper,
    ModuleWrapper,
} from '@/components'

import PeopleForm from './form'

const PeopleModule = () => {
    const store = useStore()

    const [modal, setModal] = useState<IModal>({
        title: '',
        isOpen: false,
        children: null,
    })

    const modalOnCloseHandler = () => {
        setModal({
            ...modal,
            isOpen: false,
        })
    }

    const searchAddNewHandler = () => {
        setModal({
            ...modal,
            title: 'Add New Person',
            isOpen: true,
            children: <PeopleForm modalClose={modalOnCloseHandler} />,
        })
    }

    return (
        <>
            <Modal
                title={modal.title}
                isOpen={modal.isOpen}
                children={modal.children}
                onClose={modalOnCloseHandler}
            />
            <Wrapper>
                <Header title='People' />
                <ModuleWrapper>
                    <Search
                        value=''
                        placeholder='Search person'
                        onChange={() => {}}
                        onClick={searchAddNewHandler}
                    />
                    <CardWrapper>
                        {toJS(store.people).map((person: IPeople) => {
                            const { id, name, gender, birth_year } = person

                            const description = `${
                                name.split(' ')[0]
                            } was born in ${birth_year}.`

                            return (
                                <Card
                                    key={id}
                                    title={name}
                                    titleSpan={gender}
                                    description={description}
                                />
                            )
                        })}
                    </CardWrapper>
                </ModuleWrapper>
            </Wrapper>
        </>
    )
}

export default observer(PeopleModule)
