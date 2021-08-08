import React from 'react'
import './styles/spinner.css'
import { SpinnerContent } from './styles/StylesSpinner'
export const Spinner = ({ cargando }) => {
    if(!cargando){
        return null;
    }
    return (
        <SpinnerContent>
            <div class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            </div>        
        </SpinnerContent>
    )
}
