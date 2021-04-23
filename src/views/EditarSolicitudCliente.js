import React from 'react';
import './SolicitudCliente.css';
import '../components/Boton.css';
import '../components/plantillaInputs.css';
import Bienvenida from '../components/Bienvenida';
import Lateral from '../components/Lateral';
import Checkbox from '../components/Checkbox';
import DropMenu from '../components/DropMenu';
import asesor from '../assets/asesor.png';
import CustomLink from '../components/CustomLink';

function EditarSolicitudCliente(props) {
    let fecha = new Date();
    let mes = fecha.toLocaleString('default', { month: 'long' });
    let dropMenuType = {contenido: "Tipo de crédito*",}

    let tabs = ["Administrar prospectos", "Agregar prospectos", "Administrar Clientes"];
    
    return(
        <main id='mainSolicitudCliente'>
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
                <form>
                <section className='inputsDatosCliente'>
                        <div className='grupoInput'>
                            <input type='date' className='inputFormularios w-2'  placeholder='Fecha de nacimiento*' defaultValue='1982-02-12' required></input>                            
                            <label for="name" className="etiquetaInputs">Fecha de nacimiento* (formato dd/mm/aaaa)</label>
                        </div>
                        <div className='grupoInput'>
                            <input type='text' className='inputFormularios w-2' name="Dirección*" placeholder='Dirección*' defaultValue='Privet Drive No.4' required></input>
                            <label for="name" className="etiquetaInputs">Dirección*(calle, número, ciudad, estado, código postal)</label>
                        </div>
                        <div className='grupoInput'>
                            <input type='number' className='inputFormularios w-2' name='No. de cliente Zorro Abarrotero*' placeholder='No. de cliente Zorro Abarrotero*' defaultValue='2371' required></input>
                            <label for="name" className="etiquetaInputs">No. de cliente Zorro Abarrotero*</label>
                        </div>
                        <div className='grupoInput'>
                            <input type='number' className='inputFormularios w-2' name='INE*' placeholder='INE*' defaultValue='723462' required></input>
                            <label for="name" className="etiquetaInputs" defaultValue="4894892748278">INE*(10 dígitos de la parte posterior)</label>
                        </div>
                        <div className='grupoInput'>
                            <input type='text' className='inputFormularios w-2' name='Monto solicitado*' placeholder='Monto solicitado*' defaultValue='$25,000.00' required></input>
                            <label for="name" className="etiquetaInputs">Monto solicitado* (coloque sólo el valor numérico)</label>
                        </div>
                        <DropMenu {...dropMenuType}/>
                    </section>
                    <section className='inputsReferenciasCliente'>
                        <div className='tarjetaReferencia'>
                            <h1>Referencia 1:</h1>
                            <input type='text' className='input-gral' placeholder='Nombre' defaultValue='Albus Dumbledore'></input>
                            <input type='text' className='input-gral' placeholder='Teléfono' defaultValue='7721232323'></input>
                        </div>
                        <div className='tarjetaReferencia'>
                            <h1>Referencia 2:</h1>
                            <input type='text' className='input-gral' placeholder='Nombre' defaultValue='Bellatrix Lestrange'></input>
                            <input type='text' className='input-gral' placeholder='Teléfono' defaultValue='273327329'></input>
                        </div>
                        <div className='tarjetaReferencia'>
                            <h1>Referencia 3:</h1>
                            <input type='text' className='input-gral' placeholder='Nombre' defaultValue='Tom Riddle'></input>
                            <input type='text' className='input-gral' placeholder='Teléfono' defaultValue='723662631'></input>
                        </div>
                    </section>
                    <section className='botonesEnviarSolicitud'>
                        <CustomLink tag='button' to='./administrarClientes' className="botonAzulMarino">Cancelar</CustomLink>
                        <CustomLink tag='button' to='./administrarClientes' className="botonSalmon">Guardar cambios</CustomLink>
                    </section>
                </form>
            </section>
        </main>
    );
}

export default EditarSolicitudCliente;