import React from 'react';
import salida from './salida.svg';
import fondo from './fondo.svg';
import persona from './persona.svg';
import './Lateral.css';
function Lateral(){
    return(
        <div className='contenedor'>
            <div>
                <img className='fondo' alt = 'fondoPerfil' src={fondo}/>
                <img className='persona' alt = 'imagenPerfil' src={persona}/>
            </div>
            <div className='btns'>
                <div>
                    <button id="admin_usuarios" href="" className='admin'>Administrar<br/>usuario</button>
                </div>
                <div>
                    <button id="agregar_usuarios" href="" className='noselec' >Agregar<br/>usuario</button>
                </div>
                <div>
                    <button id="agregar_usuarios" href="" className='noselec' >Agregar<br/>usuario</button>
                </div>
            </div>
            <div>
                <img className='Imgbot' alt = 'iconoLogOut' src={salida}/>
            </div>
        </div>
    );
}
export default Lateral;