import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'

import { IPeople } from '@/store'
import { useStore } from '@/hooks'
import { Input, Select, Button } from '@/components'

import { FormProps, IFormData } from './types'

const PeopleForm = ({ modalClose }: FormProps) => {
    const store = useStore()

    const { register, handleSubmit } = useForm<IFormData>({})

    const formSubmitHandler = (data: IFormData) => {
        const dataTemp: IPeople = { ...data, id: uuidv4(), homeworld: '' }

        store.addPeople(dataTemp)

        modalClose()
    }

    return (
        <form
            onSubmit={handleSubmit(formSubmitHandler)}
            className='w-full flex flex-col gap-4'
        >
            <Input {...register('name')} label='Name' placeholder='Type name' />
            <Input
                {...register('birth_year')}
                label='Birth Year'
                placeholder='Type birth year'
            />
            <Select
                {...register('gender')}
                label='Gender'
                placeholder='Choose gender'
            >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </Select>

            <div className='w-full pt-4 flex flex-col'>
                <Button type='submit'>Create</Button>
            </div>
        </form>
    )
}

export default PeopleForm
