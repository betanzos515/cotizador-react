import React from 'react'
import { ContenedorHeader, TextoHeader } from './styles/StylesHeader'

export const Header = ({titulo}) => {
    return (
        <div>
            <ContenedorHeader>
                <TextoHeader>
                    {titulo}
                </TextoHeader>
            </ContenedorHeader>
        </div>
    )
}
