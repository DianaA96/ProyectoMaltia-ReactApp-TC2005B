import React from 'react';
import Checkbox from './Checkbox.js';
import DropMenu from './DropMenu.js';
import "./ModalContactosAsesor.css"

function ModalContactosAsesor(CheckBox){
    return(
        <div className="modal">
            <h2 className="nombreUsuario"> Harry Jose Potter Hernandez </h2>
            <div className="infoPrimaria">
                <i className="fas fa-phone-alt"> </i>
                <p className="tel"> 771 245 2723 </p>
            </div>
            <div className="formulario">
               <p>Contacto 1</p>
               <Checkbox/> <DropMenu/>

               <p>Contacto 2</p>
               <Checkbox/> 

               <p>Contacto 3</p>
               <Checkbox/> 
            </div>
        </div>
    );
}

export default ModalContactosAsesor;