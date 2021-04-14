import React from 'react';
import './UsuarioNoEncontrado.css';
import ZorroMaltia from './assets/zorroMaltiaNotFound.svg';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import InputBuscar from './InputBuscar';
import InputFiltrar from './InputFiltrar';
import  analista from './assets/analista.png';

function UsuarioNoEncontrado3() {
      
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
                                    <p>Parece que tu búsqueda no ha arrojado resultados.</p>
                                    <p>Prueba con otro usuario :)</p>
                              </div>
                        </section>
                  </section>
            </main>
      </React.Fragment>
      );
}
  
export default UsuarioNoEncontrado3;