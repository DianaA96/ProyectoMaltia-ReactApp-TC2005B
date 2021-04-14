import React from 'react';
import FormAutenticacion from '../components/FormAutenticacion';
import logoMaltia from '../assets/logoMaltia.png';
import './VentanaInicioSesion.css';

function VentanaInicioSesion() {
    return (
        <div className="cont-padre">
            <img src={logoMaltia} alt="" className="logoMaltia"/>
            <FormAutenticacion/>
        </div>
    )
}

export default VentanaInicioSesion

