import Lateral from'../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import React from 'react';
import asesor from '../assets/asesor.png'
import './AgregarEditarUsuario.css';
import '../components/plantillaInputs.css';
import '../components/Boton.css';
import CustomLink from '../components/CustomLink';

function Eprospecto(){
    let tabs = ["Administrar prospectos", "Agregar prospectos","Administrar clientes"];
    return(
        <React.Fragment>
            <main>
                <aside>

                    <Lateral img = {asesor} usuario="Asesor #1234" tabs={tabs} />

                </aside>
                <div className='contentPageForms'>
                        <header>
                            <Bienvenida txtBienvenida = "Bienvenido, Asesor" txtVentana="Editar Prospecto"/>
                        </header>
                        <section className='inputsContentPage'>
                            <input className = "input-gral w-3" type="text" placeholder="Nombre(s)"  defaultValue="Harry José"/>
                            <input className = "input-gral w-3" type="text" placeholder="Apellido Paterno" defaultValue="Potter"/>
                            <input className = "input-gral w-3" type="text" placeholder="Apellido Materno" defaultValue="Hernández"/>
                            <input className = "input-gral w-2" type="text" placeholder="Teléfono" defaultValue="772 312 23 23"/>
                            <input className = "input-gral w-2" type="text" placeholder="Correo Electrónico" defaultValue="harry@hogwarts.edu"/>
                        </section>
                        <section className="botonesContentPage">
                            <CustomLink tag='button' to='./administrarProspectos' className="botonAzulMarino">Cancelar</CustomLink>
                            <CustomLink tag='button' to='./administrarProspectos' className="botonSalmon">Guardar cambios</CustomLink>
                        </section>

                </div>
            </main>
        </React.Fragment>
        
    );
}
export default Eprospecto;