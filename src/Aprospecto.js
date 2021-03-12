import Lateral from'./Lateral';
import Bienvenida from './Bienvenida';
import React from 'react';
import asesor from './img/asesor.png'
import './Aprospecto.css';
import './plantillaInputs.css';
import './Boton.css';

function Aprospecto(){
    let tabs = ["Administrar prospectos", "Agregar prospectos","Administrar clientes"];
    return(
        <React.Fragment>
            <div className='cuerpote'>
                <aside>

                    <Lateral img = {asesor} usuario="Asesor #1234" tabs={tabs} />

                </aside>
                <div className='cuerpito'>
                        <div className='cabeza'>
                            <Bienvenida txtbienvenida = "Bienvenido, Asesor" txtventana="Agregar Prospecto"/>
                            <p className='fechachida'>03 de septiembre de 2001</p>
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
                                <button href=""  className="botonAzulMarino">Cancelar</button>
                                <button href=""  className="botonSalmon">Continuar solicitud</button>
                                <button href=""  className="botonSalmon">Registrar</button>
                            </div>
                        </div>
                </div>
            </div>
        </React.Fragment>
        
    );
}
export default Aprospecto;