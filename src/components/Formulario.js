import React, { useState } from 'react'
import { Campo, Label, Select, InputRadio, Boton, Error } from '../components/styles/StylesFormulario';
import { calcularMarca, obtenerDiferenciaYear, obtenerPlan } from '../helpers';
import PropTypes from 'prop-types';

export const Formulario = ({ guardarTotal, guardarCargando }) => {
    const initialState = {
        marca:'',
        year : '',
        plan: ''
    }

    const [ datos, guardarDatos] = useState(initialState);
    const [ error,guardarError ] = useState(false);
    
    const obtenerInformacion = e =>{
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const { marca, year, plan } = datos;

    //cuando el usuario preciona submit
    const handleSubmit = (e)=>{
        let resultado = 2000;
        e.preventDefault();
        if( marca.trim() === '' || year.trim() === '' || plan.trim() === '' ){
            guardarError(true);
            return;
        }        
        guardarError( false );
        //obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(year);
        //por cada año hay que restar el 3%
        resultado -= (( diferencia * 3 ) * resultado ) / 100;
        resultado = calcularMarca( marca ) * resultado ;
        resultado = parseFloat( resultado * obtenerPlan( plan ) ).toFixed( 2 ); 
        guardarCargando(true);
        setTimeout(()=>{
            guardarCargando(false);
            guardarTotal({
                cotizacion:resultado,
                datos
            });
        },3000);
    }
    
    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
                { error ? <Error> Todos los campos son obligatorios </Error> : null }
                <Campo>
                    <Label>Marca</Label>
                    <Select
                        name='marca'
                        value={marca}
                        onChange={obtenerInformacion}
                    >
                        <option value=''>--Seleccione--</option>
                        <option value='Americano'>Americano</option>
                        <option value='Europeo'>Europeo</option>
                        <option value='Asiatico'>Asiatico</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label>Año</Label>
                    <Select
                        name='year'
                        value={year}
                        onChange={obtenerInformacion}
                    >
                        <option value=''>--Seleccione--</option>
                        <option value='2021'>2021</option>
                        <option value='2020'>2020</option>
                        <option value='2019'>2019</option>
                        <option value='2018'>2018</option>
                        <option value='2017'>2017</option>
                        <option value='2016'>2016</option>
                        <option value='2015'>2015</option>
                        <option value='2014'>2014</option>
                        <option value='2013'>2013</option>
                        <option value='2012'>2012</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label>Plan</Label>
                    <InputRadio
                        type='radio'
                        name='plan'
                        value='basico'
                        checked={plan==='basico'}
                        onChange={obtenerInformacion}
                        />Basico
                    <InputRadio
                        type='radio'
                        name='plan'
                        value='completo'
                        checked={plan==='completo'}
                        onChange={obtenerInformacion}
                    />Completo
                </Campo>
                <Boton type='submit'> Cotizar </Boton>
            </form>
        </div>
    )
}

Formulario.propTypes = {
    guardarTotal : PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}