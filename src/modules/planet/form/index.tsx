import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'

import { IPlanet } from '@/store'
import { useStore } from '@/hooks'
import { Input, Button } from '@/components'

import { FormProps, IFormData } from './types'

const PlanetForm = ({ planet, modalClose }: FormProps) => {
    const store = useStore()

    const { register, handleSubmit } = useForm<IFormData>({})

    const formSubmitHandler = (data: IFormData) => {
        if (planet?.id) {
            const dataTemp: IPlanet = { ...data, id: planet.id }

            store.updatePlanet(dataTemp)
        } else {
            const dataTemp: IPlanet = { ...data, id: uuidv4() }

            store.addPlanet(dataTemp)
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
                defaultValue={planet?.name ?? ''}
            />
            <Input
                {...register('population')}
                label='Population'
                placeholder='Type population'
                defaultValue={planet?.population ?? ''}
            />

            <div className='w-full pt-4 flex flex-col'>
                <Button type='submit'>
                    {planet?.id ? 'Update' : 'Create'}
                </Button>
            </div>
        </form>
    )
}

export default PlanetForm
