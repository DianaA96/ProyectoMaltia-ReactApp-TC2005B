import React from 'react';
import './UsuarioNoEncontrado.css';
import ZorroMaltia from '../assets/zorroMaltiaNotFound.svg';
import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import InputBuscar from '../components/InputBuscar';
import InputFiltrar from '../components/InputFiltrar';
import  analista from '../assets/analista.png';

function UsuarioNoEncontrado3(props) {
      
      let tabs = ["Solicitudes", "Generar reportes"];

    return (
      <React.Fragment>
            <main>
                  <aside>
                        <Lateral img = {analista} usuario="Analista #1234" tabs={tabs}/>
                  </aside>
                  <section className='contentPage'>
                        <header>
                              <Bienvenida txtBienvenida = "Bienvenido, Analista" txtVentana="Administración de solicitudes"/>
                        </header>
                        <section className="filtrosContentPage">
                              <InputBuscar num={3}/>
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
  
export default UsuarioNoEncontrado3;