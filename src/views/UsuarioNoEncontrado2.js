import React from 'react';
import './UsuarioNoEncontrado.css';
import ZorroMaltia from '../assets/zorroMaltiaNotFound.svg';
import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import InputBuscar from '../components/InputBuscar';
import InputFiltrar from '../components/InputFiltrar';
import asesor from '../assets/asesor.png';

function UsuarioNoEncontrado2(props) {
      
      let tabs = ["Administrar prospectos", "Agregar prospectos", "Administrar clientes"];

    return (
      <React.Fragment>
            <main>
                  <aside>
                        <Lateral img = {asesor} usuario="Asesor #1234" tabs={tabs}/>
                  </aside>
                  <section className='contentPage'>
                        <header>
                              <Bienvenida txtBienvenida = "Bienvenido, Asesor" txtVentana="Administración de prospectos"/>
                        </header>
                        <section className="filtrosContentPage">
                              <InputBuscar num={2}/>
                              <InputFiltrar/>
                        </section>
                        <section id="cajaUsuarioNoEncontrado">
                              <img src={ZorroMaltia} alt='Elemento no encontrado.'/>
                              <div>
                                    <p>{props.mensaje}</p>
                                    <p>Estamos trabajando en ello :)</p>
                              </div>
                        </section>
                  </section>
            </main>
      </React.Fragment>
      );
}
  
export default UsuarioNoEncontrado2;