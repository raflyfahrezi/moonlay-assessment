import React, { useState } from 'react'

import { Wrapper } from '@/components'
import { StarIcon, PeopleIcon, PlanetIcon } from '@/assets'

import Card from './card'
import { Menu } from './types'
import {
    HomeModuleClassName,
    HomeModuleTitleClassName,
    HomeModuleCardsClassName,
} from './styles'

const HomeModule = () => {
    const [menus] = useState<Menu[]>([
        {
            title: 'People',
            icon: <PeopleIcon />,
        },
        {
            title: 'Planets',
            icon: <PlanetIcon />,
        },
        {
            title: 'Starships',
            icon: <StarIcon />,
        },
    ])

    return (
        <Wrapper>
            <div className={HomeModuleClassName}>
                <div className={HomeModuleTitleClassName}>
                    <p>Moonlay Assessment</p>
                </div>
                <div className={HomeModuleCardsClassName}>
                    {menus.map((item) => {
                        const { title, icon } = item

                        return <Card key={title} title={title} icon={icon} />
                    })}
                </div>
            </div>
        </Wrapper>
    )
}

export default HomeModule
