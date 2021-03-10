import React from 'react';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import RadioButton from './RadioButton';
import DropMenu from './DropMenu'
import './VentanaEditarUsuario.css';
import './plantillaInputs.css'
import './Boton.css'

function VentanaEditarUsuario() {
    return(
        <React.Fragment>
            <main>
                <aside>
                    <Lateral />
                </aside>
                <section className='contentPage'>
                    <header>
                        <Bienvenida txtbienvenida = "Bienvenido, Administrador" txtventana="Editar Usuario"/>
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
                        <button className = "botonAzulMarino">Cancelar</button>
                        <button className = "botonSalmon">Guardar Cambios</button>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default VentanaEditarUsuario;