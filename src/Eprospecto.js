import Lateral from'./Lateral';
import Bienvenida from './Bienvenida';
import React from 'react';
import asesor from './img/asesor.png'
import './Eprospecto.css';
import './plantillaInputs.css';
import './Boton.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom';

function Eprospecto(){
    let tabs = ["Administrar prospectos", "Agregar prospectos","Administrar clientes"];
    return(
        <React.Fragment>
            <div className='cuerpotee'>
                <aside>

                    <Lateral img = {asesor} usuario="Asesor #1234" tabs={tabs} />

                </aside>
                <div className='cuerpitoe'>
                        <div className='cabezae'>
                            <Bienvenida txtbienvenida = "Bienvenido, Asesor" txtventana="Editar Prospecto"/>
                        </div>
                        <div className='cuerpitocontenidoe'>
                            <div className='primeralineae'>
                                <input className = "input-gral w-3" type="text" placeholder="Nombre(s)"  defaultValue="Harry José"/>
                                <input className = "input-gral w-3" type="text" placeholder="Apellido Paterno" defaultValue="Potter"/>
                                <input className = "input-gral w-3" type="text" placeholder="Apellido Materno" defaultValue="Hernández"/>
                            </div>
                            <div className='segundalineae'>
                                <input className = "input-gral w-2" type="text" placeholder="Teléfono" defaultValue="772 312 23 23"/>
                                <input className = "input-gral w-2" type="text" placeholder="Correo Electrónico" defaultValue="harry@hogwarts.edu"/>
                            </div>
                            <div className='aprospectobtnse'>
                                <button href=""  className="botonAzulMarino"><Link to='./administrarProspectos'>Cancelar</Link></button>
                                <button href=""  className="botonSalmon"><Link to='./administrarProspectos'>Guardar cambios</Link></button>
                            </div>
                        </div>
                </div>
            </div>
        </React.Fragment>
        
    );
}
export default Eprospecto;