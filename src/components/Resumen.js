import React from 'react'
import { ContenedorResumen } from './styles/StylesResumen';

export const Resumen = ({datos}) => {
    const { marca,plan,year } = datos;
    if(!datos)
        return null;
    return (
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Plan: {plan}</li>
                <li>Año del Auto: {year}</li>
            </ul>
        </ContenedorResumen>
    )
}
