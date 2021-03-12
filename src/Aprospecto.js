import Lateral from'./Lateral';
import Bienvenida from './Bienvenida';
import React from 'react';
import asesor from './img/asesor.png'
import './Aprospecto.css';
import './plantillaInputs.css';
import './Boton.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom';

function Aprospecto(){

    let fecha = new Date();
    let mes = fecha.toLocaleString('default', { month: 'long' });

    let tabs = ["Administrar prospectos", "Agregar prospectos","Administrar clientes"];
    return(
        <React.Fragment>
            <div className='cuerpote'>
                <aside>
                    <Lateral img = {asesor} usuario="Asesor #1234" tabs={tabs} />
                </aside>
                <div className='cuerpito'>
                        <div className='cabeza'>
                            <Bienvenida txtbienvenida = "Bienvenido, Asesor" txtventana="Agregar prospecto"/>
                            <p className='fechachida'>{`${fecha.getDate()} de ${mes} del ${fecha.getFullYear()}`}</p>
                        </div>
                        <div className='cuerpitocontenido'>
                            <div className='primeralinea'>
                                <input className = "input-gral w-3" type="text" placeholder="Nombre(s)"/>
                                <input className = "input-gral w-3" type="text" placeholder="Apellido paterno"/>
                                <input className = "input-gral w-3" type="text" placeholder="Apellido materno"/>
                            </div>
                            <div className='segundalinea'>
                                <input className = "input-gral w-2" type="text" placeholder="Teléfono"/>
                                <input className = "input-gral w-2" type="text" placeholder="Correo electrónico"/>
                            </div>
                            <div className='aprospectobtns'>
                                <button href=""  className="botonAzulMarino"><Link to='./administrarProspectos'>Cancelar</Link></button>
                                <button href=""  className="botonSalmon"><Link to='./solicitudCliente'>Continuar solicitud</Link></button>
                                <button href=""  className="botonSalmon"><Link to='./administrarProspectos'>Registrar</Link></button>
                         </div>
                     </div>
                </div>
            </div>
        </React.Fragment>
        
    );
}

export default Aprospecto;