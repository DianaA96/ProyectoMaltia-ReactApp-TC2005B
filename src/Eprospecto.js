import Lateral from'./Lateral';
import Bienvenida from './Bienvenida';
import React from 'react';
import asesor from './img/asesor.png'
import './Eprospecto.css';
import './plantillaInputs.css';
import './Boton.css';
import CustomLink from './CustomLink';

function Aprospecto(){
    let tabs = ["Administrar prospectos", "Agregar prospectos","Administrar clientes"];
    return(
        <React.Fragment>
            <div className='cuerpotee'>
                <aside>

                    <Lateral img = {asesor} usuario="Asesor #1234" tabs={tabs} />

                </aside>
                <div className='cuerpitoe'>
                        <div className='cabezae'>
                            <Bienvenida txtbienvenida = "Bienvenido, Asesor" txtventana="Editar Prospecto"/>
                        </div>
                        <div className='cuerpitocontenidoe'>
                            <div className='primeralineae'>
                                <input className = "input-gral w-3" type="text" placeholder="Harry José"/>
                                <input className = "input-gral w-3" type="text" placeholder="Potter"/>
                                <input className = "input-gral w-3" type="text" placeholder="Hernandez"/>
                            </div>
                            <div className='segundalineae'>
                                <input className = "input-gral w-2" type="text" placeholder="772 123 273 2"/>
                                <input className = "input-gral w-2" type="text" placeholder="hagrid@hogwarts.ww"/>
                            </div>
                            <div className='aprospectobtnse'>
                                <CustomLink tag='button' to='./administrarProspectos' className="botonAzulMarino">Cancelar</CustomLink>
                                <CustomLink tag='button' to='./administrarProspectos' className="botonSalmon">Guardar cambios</CustomLink>
                            </div>
                        </div>
                </div>
            </div>
        </React.Fragment>
        
    );
}
export default Aprospecto;