import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import React from 'react';
import asesor from '../assets/asesor.png'
import './AgregarEditarUsuario.css';
import '../components/plantillaInputs.css';
import '../components/Boton.css';
import CustomLink from '../components/CustomLink';

function Aprospecto(){

    let fecha = new Date();
    let varFecha = `${fecha.getDate()} de ${fecha.toLocaleString('default', { month: 'long' })} del ${fecha.getFullYear()}`;

    let tabs = ["Administrar prospectos", "Agregar prospectos","Administrar clientes"];
    return(
        <React.Fragment>
            <main>
                <aside>
                    <Lateral img = {asesor} usuario="Asesor #1234" tabs={tabs} />
                </aside>
                <div className='contentPageForms'>
                        <header>
                            <Bienvenida txtBienvenida = "Bienvenido, Asesor" txtVentana="Agregar prospecto"/>
                            <p className='tag-fecha'>{varFecha}</p>
                        </header>

                        <section className="inputsContentPage">
                            <input className = "input-gral w-3" type="text" placeholder="Nombre(s)"/>
                            <input className = "input-gral w-3" type="text" placeholder="Apellido paterno"/>
                            <input className = "input-gral w-3" type="text" placeholder="Apellido materno"/>
                            <input className = "input-gral w-2" type="text" placeholder="Teléfono"/>
                            <input className = "input-gral w-2" type="text" placeholder="Correo electrónico" />
                        </section>

                        <section className='botonesContentPage'>
                            <CustomLink tag='button' to='./administrarProspectos' className="botonAzulMarino">Cancelar</CustomLink>
                            <CustomLink tag='button' to='./solicitudCliente' className="botonSalmon mr">Continuar solicitud</CustomLink>
                            <CustomLink tag='button' to='./administrarProspectos' className="botonSalmon mr">Registrar</CustomLink>
                        </section>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Aprospecto;