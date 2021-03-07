import React from 'react'
import FormAutenticacion from './FormAutenticacion'
import logoMaltia from './img/logoMaltia.png'
import './VentanaInicioSesion.css'

function VentanaInicioSesion() {
    return (
        <div className="cont-padre">
            <img src={logoMaltia} alt="" className="logoMaltia"/>
            <FormAutenticacion/>
        </div>
    )
}

export default VentanaInicioSesion

