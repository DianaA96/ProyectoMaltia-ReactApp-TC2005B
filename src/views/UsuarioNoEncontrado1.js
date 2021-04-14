import React from 'react';
import './UsuarioNoEncontrado.css';
import ZorroMaltia from './assets/zorroMaltiaNotFound.svg';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import InputBuscar from './InputBuscar';
import InputFiltrar from './InputFiltrar';
import admin from './assets/persona.svg';

function UsuarioNoEncontrado1() {
      
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
                                    <p>Parece que tu búsqueda no ha arrojado resultados.</p>
                                    <p>Prueba con otro usuario :)</p>
                              </div>
                        </section>
                  </section>
            </main>
      </React.Fragment>
      );
}
  
export default UsuarioNoEncontrado1;