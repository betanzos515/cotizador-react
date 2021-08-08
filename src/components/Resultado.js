import React from 'react'
import { Mensaje, ResultadoCotizacion, TextoCotizacion } from './styles/StyledResultados'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Resultado = ({ cotizacion }) => {
    return (
        ( cotizacion === 0 ) 
            ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
            :(
                <ResultadoCotizacion>
                    <TransitionGroup
                        component='p'
                        className='resutlado'
                    >
                        <CSSTransition
                            classNames='resultado'
                            key={cotizacion}
                            timeout={{enter:500, exit:500}}
                        >
                            <TextoCotizacion>El total es : $ {cotizacion} </TextoCotizacion>
                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoCotizacion>
             )
                
    )
}
