import React from 'react'
import { toJS } from 'mobx'
import { useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'

import { useStore } from '@/hooks'
import { Input, Select, Button } from '@/components'

import { IFormData } from './types'

const PeopleForm = () => {
    const store = useStore()

    const { register, handleSubmit } = useForm<IFormData>({})

    const formSubmitHandler = (data: IFormData) => {
        console.log(data)
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
            <Select
                {...register('homeworld')}
                label='Homeworld'
                placeholder='Choose homeworld'
            >
                {toJS(store.planet).map((planet) => {
                    return (
                        <option key={planet.id} value={planet.id}>
                            {planet.name}
                        </option>
                    )
                })}
            </Select>
            <div className='w-full pt-4 flex flex-col'>
                <Button type='submit'>Create</Button>
            </div>
        </form>
    )
}

export default observer(PeopleForm)
