import React from 'react';
import './SolicitudCliente.css';
import './Boton.css';
import './plantillaInputs.css';
import Bienvenida from './Bienvenida';
import Lateral from './Lateral';
import Checkbox from './Checkbox';
import DropMenu from './DropMenu';

//Props simuladas que deben pasarse en donde se llame al componente:
//let datosSolicitudCliente = {
//    nombreCliente: "José Herón Samperio León",
//    numTelCliente: "771 235 82 73",
//  }

function SolicitudCliente(props) {
    let fecha = new Date();
    let mes = fecha.toLocaleString('default', { month: 'long' });
    let dropMenuType = {contenido: "Tipo de crédito*",}
    
    return(
        <React.Fragment>
            <main>
                <aside>
                    <Lateral />
                </aside>
                <section className='contentPageExtendido'>
                    <header className='headerSolicitudCliente'>
                        <Bienvenida txtbienvenida = "Bienvenido, Asesor" txtventana="Llenar la solicitud del cliente"/>
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
                        <input className='input-gral' placeholder='Fecha de nacimiento*'></input>
                        <input className='input-gral' placeholder='Dirección*'></input>
                        <input className='input-gral' placeholder='No. de cliente Zorro Abarrotero*'></input>
                        <input className='input-gral' placeholder='INE*'></input>
                        <input className='input-gral' placeholder='Monto solicitado*'></input>
                        <DropMenu {...dropMenuType}/>
                    </section>
                    <section className='inputsReferenciasCliente'>
                        <h1>Referencia 1:</h1>
                        <h1>Referencia 2:</h1>
                        <h1>Referencia 3:</h1>
                        <input className='input-gral' placeholder='Nombre'></input>
                        <input className='input-gral' placeholder='Nombre'></input>
                        <input className='input-gral' placeholder='Nombre'></input>
                        <input className='input-gral' placeholder='Teléfono'></input>
                        <input className='input-gral' placeholder='Teléfono'></input>                        
                        <input className='input-gral' placeholder='Teléfono'></input>
                    </section>
                    <section className='botonesEnviarSolicitud'>
                        <button className='botonAzulMarino'>Cancelar</button>
                        <button className='botonSalmon'>Enviar solicitud</button>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default SolicitudCliente;