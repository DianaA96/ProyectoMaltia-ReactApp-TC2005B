import React from 'react';
import "./ContactoAsesor.css"
import Checkbox from './Checkbox.js';
import './Boton.css';
import DropMenu from './DropMenu.js';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom';

function ModalContactosAsesor(CheckBox){
    return(
        <div className="modal">
            <h2 className="nombreUsuario"> Harry Jose Potter Hernandez </h2>
            <div className="infoPrimaria">
                <i className="fas fa-phone-alt"> </i>
                <p className="tel">  771 245 2723 </p>
            </div>
            <div className="formulario">
                <div className="cont-contacto">
                    <div className="contacto-left">
                        <p>Contacto 1 </p>
                        <Checkbox /> 
                    </div>
                    <DropMenu contenido="Compromiso"/> 
                </div>
                <div className="cont-contacto">
                    <div className="contacto-left">
                        <p>Contacto 2</p>
                        <Checkbox/>  
                    </div>
                    <DropMenu contenido="Compromiso"/> 
                </div>
                <div className="cont-contacto">
                    <div className="contacto-left">
                        <p>Contacto 3</p>
                        <Checkbox/> 
                    </div>
                    <DropMenu contenido="Compromiso"/> 
                </div>
            </div>
            <button className="botonSalmon"><Link to='./administrarProspectos'>Guardar cambios</Link></button>
        </div>
    );
}

export default ModalContactosAsesor;