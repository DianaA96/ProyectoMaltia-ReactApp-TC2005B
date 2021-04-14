import React from 'react';
import './SolicitudCliente.css';
import './Boton.css';
import './plantillaInputs.css';
import Bienvenida from './Bienvenida';
import Lateral from '../Lateral';
import Checkbox from './Checkbox';
import DropMenu from './DropMenu';
import asesor from './assets/asesor.png';
import CustomLink from '../components/CustomLink';

function EditarSolicitudCliente(props) {
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
                        <Bienvenida txtBienvenida = "Bienvenido, Asesor" txtVentana="Editar la solicitud del cliente"/>
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
                        <input type='text' className='input-gral' placeholder='Fecha de nacimiento*' defaultValue='23-02-1982'></input>
                        <input type='text' className='input-gral' placeholder='Dirección*' defaultValue='Privet Drive No.4'></input>
                        <input type='text' className='input-gral' placeholder='No. de cliente Zorro Abarrotero*' defaultValue='2371'></input>
                        <input type='text' className='input-gral' placeholder='INE*' defaultValue='723462'></input>
                        <input type='text' className='input-gral' placeholder='Monto solicitado*' defaultValue='$25,000.00'></input>
                        <DropMenu {...dropMenuType}/>
                    </section>
                    <section className='inputsReferenciasCliente'>
                        <h1>Referencia 1:</h1>
                        <h1>Referencia 2:</h1>
                        <h1>Referencia 3:</h1>
                        <input type='text' className='input-gral' placeholder='Nombre' defaultValue='Albus Dumbledore'></input>
                        <input type='text' className='input-gral' placeholder='Nombre' defaultValue='Bellatrix Lestrange'></input>
                        <input type='text' className='input-gral' placeholder='Nombre' defaultValue='Tom Riddle'></input>
                        <input type='text' className='input-gral' placeholder='Teléfono' defaultValue='7721232323'></input>
                        <input type='text' className='input-gral' placeholder='Teléfono' defaultValue='273327329'></input>                        
                        <input type='text' className='input-gral' placeholder='Teléfono' defaultValue='723662631'></input>
                    </section>
                    <section className='botonesEnviarSolicitud'>
                        <CustomLink tag='button' to='./administrarClientes' className="botonAzulMarino">Cancelar</CustomLink>
                        <CustomLink tag='button' to='./administrarClientes' className="botonSalmon">Guardar cambios</CustomLink>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default EditarSolicitudCliente;