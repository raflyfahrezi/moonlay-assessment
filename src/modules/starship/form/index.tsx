import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'

import { IStarships } from '@/store'
import { useStore } from '@/hooks'
import { Input, Button } from '@/components'

import { FormProps, IFormData } from './types'

const StarshipForm = ({ starship, modalClose }: FormProps) => {
    const store = useStore()

    const { register, handleSubmit } = useForm<IFormData>({})

    const formSubmitHandler = (data: IFormData) => {
        if (starship?.id) {
            const dataTemp: IStarships = { ...data, id: starship.id }

            store.updateStarship(dataTemp)
        } else {
            const dataTemp: IStarships = { ...data, id: uuidv4() }

            store.addStarship(dataTemp)
        }

        modalClose()
    }

    return (
        <form
            onSubmit={handleSubmit(formSubmitHandler)}
            className='w-full flex flex-col gap-4'
        >
            <Input
                {...register('name')}
                label='Name'
                placeholder='Type name'
                defaultValue={starship?.name ?? ''}
            />
            <Input
                {...register('model')}
                label='Model'
                placeholder='Type model'
                defaultValue={starship?.model ?? ''}
            />
            <Input
                {...register('manufacturer')}
                label='Manufacturer'
                placeholder='Type manufacturer'
                defaultValue={starship?.manufacturer ?? ''}
            />

            <div className='w-full pt-4 flex flex-col'>
                <Button type='submit'>
                    {starship?.id ? 'Update' : 'Create'}
                </Button>
            </div>
        </form>
    )
}

export default StarshipForm
