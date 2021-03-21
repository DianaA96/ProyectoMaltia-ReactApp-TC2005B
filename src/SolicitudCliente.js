import React from 'react';
import './SolicitudCliente.css';
import './Boton.css';
import './plantillaInputs.css';
import Bienvenida from './Bienvenida';
import Lateral from './Lateral';
import Checkbox from './Checkbox';
import DropMenu from './DropMenu';
import asesor from './assets/asesor.png';
import CustomLink from './CustomLink';

function SolicitudCliente(props) {
    let fecha = new Date();
    let mes = fecha.toLocaleString('default', { month: 'long' });
    let dropMenuType = {contenido: "Tipo de crédito*",}

    let tabs = ["Administrar prospectos", "Agregar prospectos", "Administrar Clientes"];
    
    return(
        <React.Fragment>
            <main>
                <aside>
                    <Lateral tabs = {tabs} img = {asesor} />
                </aside>
                <section className='contentPageExtendido'>
                    <header className='headerSolicitudCliente'>
                        <Bienvenida txtBienvenida = "Bienvenido, Asesor" txtVentana="Llenar la solicitud del cliente"/>
                        <h2 className="fechaLlenadoSolicitud">{`${fecha.getDate()} de ${mes} del ${fecha.getFullYear()}`}</h2>
                    </header>
                    <section className='datosClienteSolicitud'>
                        <div className='datosCliente'>
                            <h1>{props.nombreCliente}</h1>
                            <h1><i class="fas fa-phone-alt"></i>  {props.numTelCliente}</h1>
                        </div>
                        <div className='checkSolicitud'>
                            <h3>Solicitud firmada:</h3>
                            <Checkbox />
                        </div>
                    </section>
                    <section className='inputsDatosCliente'>
                        <input type='text' className='input-gral' placeholder='Fecha de nacimiento*'></input>
                        <input type='text' className='input-gral' placeholder='Dirección*'></input>
                        <input type='text' className='input-gral' placeholder='No. de cliente Zorro Abarrotero*'></input>
                        <input type='text' className='input-gral' placeholder='INE*'></input>
                        <input type='text' className='input-gral' placeholder='Monto solicitado*'></input>
                        <DropMenu {...dropMenuType}/>
                    </section>
                    <section className='inputsReferenciasCliente'>
                        <h1>Referencia 1:</h1>
                        <h1>Referencia 2:</h1>
                        <h1>Referencia 3:</h1>
                        <input type='text' className='input-gral' placeholder='Nombre'></input>
                        <input type='text' className='input-gral' placeholder='Nombre'></input>
                        <input type='text' className='input-gral' placeholder='Nombre'></input>
                        <input type='text' className='input-gral' placeholder='Teléfono'></input>
                        <input type='text' className='input-gral' placeholder='Teléfono'></input>                        
                        <input type='text' className='input-gral' placeholder='Teléfono'></input>
                    </section>
                    <section className='botonesEnviarSolicitud'>
                        <CustomLink tag='button' to='./administrarProspectos' className="botonAzulMarino">Cancelar</CustomLink>
                        <CustomLink tag='button' to='./administrarProspectos' className="botonSalmon">Enviar solicitud</CustomLink>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default SolicitudCliente;