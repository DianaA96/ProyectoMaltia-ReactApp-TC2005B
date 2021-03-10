import React from 'react';
import persona from './persona.svg';
import './Lateral.css';

function Lateral(){
    return(
        <div className="contenedor-lateral">
            <div className = "datos_usuario">
                    <div className="cont_icono">
                        <img classname="icono_usuario" src={persona} alt=""/>
                    </div>
                    <h4 className="nombre_usuario">Usuario #12124</h4>
            </div>

            <div className='tabs'>
                <a id="tab" href="" > <div className='tab'>Administrar <br/> usuarios </div></a>
                <a id="tab" href="" > <div className='tab'>Agregar <br/> usuarios </div></a>
            </div>

            <div className="logout">
                <a><i class="fas fa-sign-out-alt"></i></a>
                <p>Cerrar sesión</p>
            </div>
             
            
        </div>
    );
}
export default Lateral;