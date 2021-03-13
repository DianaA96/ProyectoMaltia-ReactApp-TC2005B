import React from 'react';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import RadioButton from './RadioButton';
import DropMenu from './DropMenu'
import './VentanaEditarUsuario.css';
import './plantillaInputs.css'
import './Boton.css'
import admin from './persona.svg';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom';

function VentanaEditarUsuario() {
    let tabs = ["Administrar Usuarios", "Agregar Usuario"];
    return(
        <React.Fragment>
            <main>
                <aside>
                    <Lateral img = {admin} usuario="Admin #1234" tabs={tabs} />
                </aside>
                <section className='contentPageEditarUsuario'>
                    <header>
                        <Bienvenida txtbienvenida = "Bienvenido, Administrador" txtventana="Editar Usuario"/>
                    </header>
                    <section className="radiosContentPage">
                        <RadioButton etiqueta="Asesor" />
                        <RadioButton etiqueta="Analista"/>
                    </section>
                    <section className="inputsContentPage">
                        <input className = "input-gral w-3" type="text" name="nombres" placeholder="Nombre(s)" defaultValue="Harry José"/>
                        <input className = "input-gral w-3" type="text" name="apellidom" placeholder="Apellido Materno" defaultValue="Potter"/>
                        <input className = "input-gral w-3" type="text" name="apellidop" placeholder="Apellido Paterno" defaultValue="Hernández"/>
                        <input className = "input-gral w-2" type="tel" name="numtelefono" placeholder="Número de teléfono" defaultValue="771 212 23 32"/>
                        <input className = "input-gral w-2" type="email" name="correo" placeholder="Correo electrónico" defaultValue="email@hogwarts.edu"/>
                        <DropMenu contenido="Asesor"/>
                        <DropMenu contenido="#1341"/>
                    </section>

                    <section className="botonesContentPage">
                        <button className = "botonAzulMarino"><Link to='./AdministrarUsuarios'>Cancelar</Link></button>
                        <button className = "botonSalmon"><Link to='./AdministrarUsuarios'>Guardar Cambios</Link></button>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default VentanaEditarUsuario;