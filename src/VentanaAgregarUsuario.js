import React from 'react';
import Lateral from './Lateral';
import CustomLink from './CustomLink';
import Bienvenida from './Bienvenida';
import RadioButton from './RadioButton';
import DropMenu from './DropMenu';
import './VentanaAgregarUsuario.css';
import './plantillaInputs.css';
import './Boton.css';
import admin from './assets/persona.svg';

function VentanaAgregarUsuario() {
    let tabs = ["Administrar Usuarios", "Agregar Usuario"];
    return(
        <React.Fragment>
            <main>
                <aside>
                    <Lateral img = {admin} usuario="Admin #1234" tabs={tabs} />
                </aside>
                <section className='contentPageAgregarUsuario'>
                    <header>
                        <Bienvenida txtBienvenida = "Bienvenido, Administrador" txtVentana="Agregar usuario"/>
                    </header>
                    <section className="radiosContentPage">
                        <RadioButton etiqueta="Asesor" />
                        <RadioButton etiqueta="Analista"/>
                    </section>
                    <section className="inputsContentPage">
                        <input className = "input-gral w-3" type="text" name="nombres"  placeholder="Nombre(s)"/>
                        <input className = "input-gral w-3" type="text" name="apellidop"  placeholder="Apellido Paterno"/>
                        <input className = "input-gral w-3" type="text" name="apellidom" placeholder="Apellido Materno"/>
                        <input className = "input-gral w-2" type="tel" name="numtelefono"  placeholder="Número de teléfono"/>
                        <input className = "input-gral w-2" type="email" name="correo" placeholder="Correo electrónico"/>
                        <DropMenu contenido="Puesto"/>
                        <DropMenu contenido="Departamento"/>
                    </section>

                    <section className="botonesContentPage">
                        <CustomLink tag='button' to='./administrarUsuarios' className="botonAzulMarino">Cancelar</CustomLink>
                        <CustomLink tag='button' to='./administrarUsuarios' className="botonSalmon">Registrar</CustomLink>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default VentanaAgregarUsuario;