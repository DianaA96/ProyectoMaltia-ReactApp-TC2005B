import React from 'react';
import "./ContactoAsesor.css"
import Checkbox from './Checkbox.js';
import './Boton.css';
import DropMenu from './DropMenu.js';


function ModalContactosAsesor(CheckBox){
    return(
        <div className="modal">
            <h2 className="nombreUsuario"> Harry Jose Potter Hernandez </h2>
            <div className="infoPrimaria">
                <i className="fas fa-phone-alt"> </i>
                <p className="tel"> 771 245 2723 </p>
            </div>
            <div className="formulario">
                <div className="ctx1">
                    <p>Contacto 1 </p>
                    <Checkbox /> <div className="menudrop"> <DropMenu/> </div>
                </div>
                
                <div className="ctx2">
                    <p>Contacto 2</p>
                    <Checkbox/>  <div className="menudrop"> <DropMenu/> </div>
                </div>

                <div className="ctx3">
                    <p>Contacto 3</p>
                    <Checkbox/> 
                    <div className="menudrop"> <DropMenu/> </div>
                </div>
            </div>
            <button className="botonSalmon"> Guardar cambios </button>
        </div>
    );
}

export default ModalContactosAsesor;