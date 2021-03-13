import React from 'react';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import RadioButton from './RadioButton';
import DropMenu from './DropMenu';
import './VentanaAgregarUsuario.css';
import './plantillaInputs.css';
import './Boton.css';
import admin from './persona.svg';


import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom';

function VentanaAgregarUsuario() {
    let tabs = ["Administrar Usuarios", "Agregar Usuario"];
    return(
        <React.Fragment>
            <main>
                <aside>
                    <Lateral img = {admin} usuario="Admin #1234" tabs={tabs} />
                </aside>
                <section className='contentPage'>
                    <header>
                        <Bienvenida txtbienvenida = "Bienvenido, Administrador" txtventana="Agregar usuario"/>
                    </header>
                    <section className="radiosContentPage">
                        <RadioButton etiqueta="Asesor" />
                        <RadioButton etiqueta="Analista"/>
                    </section>
                    <section className="inputsContentPage">
                        <input className = "input-gral w-3" type="text" name="Nombre(s)"  placeholder="Nombre(s)"/>
                        <input className = "input-gral w-3" type="text" name="Apellido Paterno"  placeholder="Apellido Paterno"/>
                        <input className = "input-gral w-3" type="text" name="Apellido Materno" placeholder="Apellido Materno"/>
                        <input className = "input-gral w-2" type="tel" name="Número de teléfono"  placeholder="Número de teléfono"/>
                        <input className = "input-gral w-2" type="email" name="Correo electrónico" placeholder="Correo electrónico"/>
                        <DropMenu contenido="Puesto"/>
                        <DropMenu contenido="Departamento"/>
                    </section>

                    <section className="botonesContentPage">
                        <button className = "botonAzulMarino"><Link to='AdministrarUsuarios'>Cancelar</Link></button>
                        <button className = "botonSalmon"><Link to='AdministrarUsuarios'>Registrar</Link></button>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default VentanaAgregarUsuario;