import React from 'react'
import './FormAutenticacion.css'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom';

function FormAutenticacion() {
    return (
        <div className="contenedor">
            <h2 className="titulo">Inicia sesión</h2>
            <input type="text" name="Usuario" placeholder="Usuario" id="inputUsuario" className="inputUsuario"/>
            <input type="password" name="Contraseña" placeholder="Contraseña" id="inputContrasena" className="inputContrasena"/>
            <button className="botonSalmon"><Link to='./administrarProspectos'>Entrar</Link></button>
        </div>
    )
}

export default FormAutenticacion
