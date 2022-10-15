import { toJS } from 'mobx'
import swal from 'sweetalert2'
import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'

import { IModal } from '@/models'
import { useStore } from '@/hooks'
import { IStarships } from '@/store'
import {
    Card,
    Modal,
    Header,
    Search,
    Wrapper,
    CardWrapper,
    ModuleWrapper,
} from '@/components'

import StarshipForm from './form'

const StarshipModule = () => {
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
            title: 'Add New Starship',
            isOpen: true,
            children: <StarshipForm modalClose={modalOnCloseHandler} />,
        })
    }

    const cardOpenDetailsHandler = (id: string) => {
        const starship = toJS(store.getOneStarship(id))

        setModal({
            ...modal,
            title: 'Edit Starship',
            isOpen: true,
            children: (
                <StarshipForm
                    starship={starship}
                    modalClose={modalOnCloseHandler}
                />
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
                store.deleteStarship(id)

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
                <Header title='Starships' />
                <ModuleWrapper>
                    <Search
                        value=''
                        placeholder='Search starship'
                        onChange={() => {}}
                        onClick={() => searchAddNewHandler()}
                    />
                    <CardWrapper>
                        {toJS(store.starships).map((starship: IStarships) => {
                            const { id, name, model, manufacturer } = starship

                            const description = `This starship is a ${model} manufactured by ${manufacturer}.`

                            return (
                                <Card
                                    key={id}
                                    title={name}
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

export default observer(StarshipModule)
