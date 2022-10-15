import { toJS } from 'mobx'
import swal from 'sweetalert2'
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'

import { IModal } from '@/models'
import { IPlanet } from '@/store'
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

import PlanetForm from './form'

const PlanetModule = () => {
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

    const formattedNumberOfString = (number: string) => {
        return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    const searchAddNewHandler = () => {
        setModal({
            ...modal,
            title: 'Add New Planet',
            isOpen: true,
            children: <PlanetForm modalClose={modalOnCloseHandler} />,
        })
    }

    const cardOpenDetailsHandler = (id: string) => {
        const planet = toJS(store.getOnePlanet(id))

        setModal({
            ...modal,
            title: 'Edit Planet',
            isOpen: true,
            children: (
                <PlanetForm planet={planet} modalClose={modalOnCloseHandler} />
            ),
        })
    }

    const cardDeleteHandler = (id: string) => {
        swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this planet!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.value) {
                store.deletePlanet(id)

                swal.fire(
                    'Deleted!',
                    'Your planet has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <>
            <Modal
                title={modal.title}
                isOpen={modal.isOpen}
                onClose={modalOnCloseHandler}
                children={modal.children}
            />
            <Wrapper>
                <Header title='Planets' />
                <ModuleWrapper>
                    <Search
                        value=''
                        placeholder='Search person'
                        onChange={() => {}}
                        onClick={() => searchAddNewHandler()}
                    />
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
                                    deleteCard={() => {
                                        cardDeleteHandler(id)
                                    }}
                                    openDetails={() => {
                                        cardOpenDetailsHandler(id)
                                    }}
                                />
                            )
                        })}
                    </CardWrapper>
                </ModuleWrapper>
            </Wrapper>
        </>
    )
}

export default observer(PlanetModule)
