import React from 'react';
import './UsuarioNoEncontrado.css';
import ZorroMaltia from '../assets/zorroMaltiaNotFound.svg';
import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import InputBuscar from '../components/InputBuscar';
import InputFiltrar from '../components/InputFiltrar';
import admin from '../assets/persona.svg';

function UsuarioNoEncontrado1(props) {
      
      let tabs = ["Administrar usuarios", "Agregar usuario"];

    return (
      <React.Fragment>
            <main>
                  <aside>
                        <Lateral img = {admin} usuario="Admin #1234" tabs={tabs}/>
                  </aside>
                  <section className='contentPage'>
                        <header>
                              <Bienvenida txtBienvenida = "Bienvenido, Administrador" txtVentana="Administración de usuarios"/>
                        </header>
                        <section className="filtrosContentPage">
                              <InputBuscar num={1} />
                              <InputFiltrar />
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
  
export default UsuarioNoEncontrado1;