import Lateral from'../Lateral';
import Bienvenida from '../components/Bienvenida';
import React from 'react';
import asesor from './assets/asesor.png'
import './Aprospecto.css';
import './plantillaInputs.css';
import './Boton.css';
import CustomLink from '../CustomLink';

function Aprospecto(){

    let fecha = new Date();
    let varFecha = `${fecha.getDate()} de ${fecha.toLocaleString('default', { month: 'long' })} del ${fecha.getFullYear()}`;

    let tabs = ["Administrar prospectos", "Agregar prospectos","Administrar clientes"];
    return(
        <React.Fragment>
            <div className='cuerpote'>
                <aside>
                    <Lateral img = {asesor} usuario="Asesor #1234" tabs={tabs} />
                </aside>
                <div className='cuerpito'>
                        <div className='cabeza'>
                            <Bienvenida txtBienvenida = "Bienvenido, Asesor" txtVentana="Agregar prospecto"/>
                            <p className='fechachida'>{varFecha}</p>
                        </div>
                        <div className='cuerpitocontenido'>
                            <div className='primeralinea'>
                                <input className = "input-gral w-3" type="text" placeholder="Nombre(s)"/>
                                <input className = "input-gral w-3" type="text" placeholder="Apellido paterno"/>
                                <input className = "input-gral w-3" type="text" placeholder="Apellido materno"/>
                            </div>
                            <div className='segundalinea'>
                                <input className = "input-gral w-2" type="text" placeholder="Teléfono"/>
                                <input className = "input-gral w-2" type="text" placeholder="Correo electrónico" />
                            </div>
                            <div className='aprospectobtns'>
                                <CustomLink tag='button' to='./administrarProspectos' className="botonAzulMarino">Cancelar</CustomLink>
                                <CustomLink tag='button' to='./solicitudCliente' className="botonSalmon">Continuar solicitud</CustomLink>
                                <CustomLink tag='button' to='./administrarProspectos' className="botonSalmon">Registrar</CustomLink>
                         </div>
                     </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Aprospecto;