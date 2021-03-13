import React from 'react';
import Lateral from './Lateral';
import CustomLink from'./CustomLink';
import Bienvenida from './Bienvenida';
import RadioButton from './RadioButton';
import DropMenu from './DropMenu'
import './VentanaEditarUsuario.css';
import './plantillaInputs.css'
import './Boton.css'
import admin from './persona.svg';

function VentanaEditarUsuario() {
    let tabs = ["Administrar Usuarios", "Agregar Usuario"];
    return(
        <React.Fragment>
            <main>
                <aside>
                    <Lateral img = {admin} usuario="Admin #1234" tabs={tabs} />
                </aside>
                <section className='contentPage'>
                    <header>
                        <Bienvenida txtbienvenida = "Bienvenido, Administrador" txtventana="Editar usuario"/>
                    </header>
                    <section className="radiosContentPage">
                        <RadioButton etiqueta="Asesor" />
                        <RadioButton etiqueta="Analista"/>
                    </section>
                    <section className="inputsContentPage">
                        <input className = "input-gral w-3" type="text" name="" id="" placeholder="Nombre(s)"/>
                        <input className = "input-gral w-3" type="text" name="" id="" placeholder="Apellido Materno"/>
                        <input className = "input-gral w-3" type="text" name="" id="" placeholder="Apellido Paterno"/>
                        <input className = "input-gral w-2" type="tel" name="" id="" placeholder="Número de teléfono"/>
                        <input className = "input-gral w-2" type="email" name="" id="" placeholder="Correo electrónico"/>
                        <DropMenu contenido="Puesto"/>
                        <DropMenu contenido="Departamento"/>
                    </section>

                    <section className="botonesContentPage">
                        <CustomLink tag='button' to='./administrarUsuarios' className="botonAzulMarino">Cancelar</CustomLink>
                        <CustomLink tag='button' to='./administrarUsuarios' className="botonSalmon">Guardar cambios</CustomLink>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default VentanaEditarUsuario;