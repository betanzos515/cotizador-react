import React, { useState } from 'react';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { Resultado } from './components/Resultado';
import { Resumen } from './components/Resumen';
import { Spinner } from './components/Spinner';
import { Contenedor, ContenedorFormulario } from './components/styles/StylesApp';


export const App = () => {
    const [ resumen, guardarResumen ] = useState({
        cotizacion:0,
            datos:''
    });

    const [ cargando, guardarCargando ] = useState(false);

    const { datos, cotizacion } = resumen;

    return (
        <Contenedor>
            <Header
            titulo='Cotizador de Seguros'
            ></Header>
        <ContenedorFormulario>
            <Formulario
                guardarTotal={ guardarResumen }
                guardarCargando={guardarCargando}
            />

            <Spinner
                cargando={cargando}
            />

            <Resumen
                datos={ datos }
            />
            
            <Resultado
                cotizacion={cotizacion}
            />
        </ContenedorFormulario>
        </Contenedor>
    )
}