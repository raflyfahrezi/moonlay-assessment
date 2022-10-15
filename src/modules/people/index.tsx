/* eslint-disable react-hooks/exhaustive-deps */

import { toJS } from 'mobx'
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import swal from 'sweetalert2'

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

    const cardOpenDetailsHandler = (id: string) => {
        const person = toJS(store.getOnePeople(id))

        setModal({
            ...modal,
            title: 'Edit Person',
            isOpen: true,
            children: (
                <PeopleForm person={person} modalClose={modalOnCloseHandler} />
            ),
        })
    }

    const cardDeleteHandler = (id: string) => {
        swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                store.deletePeople(id)

                swal.fire('Deleted!', 'A person has been deleted.', 'success')
            }
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
                                    deleteCard={() => cardDeleteHandler(id)}
                                    openDetails={() =>
                                        cardOpenDetailsHandler(id)
                                    }
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
