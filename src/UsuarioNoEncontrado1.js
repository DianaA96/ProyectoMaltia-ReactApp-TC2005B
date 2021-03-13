import React from 'react';
import './UsuarioNoEncontrado.css';
import ZorroMaltia from './img/zorroMaltiaNotFound.svg';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import InputBuscar from './InputBuscar';
import InputFiltrar from './InputFiltrar';
import admin from './persona.svg';

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
                              <Bienvenida txtbienvenida = "Bienvenido, Administrador" txtventana="Administración de usuarios"/>
                        </header>
                        <section className="filtrosContentPage">
                              <InputBuscar />
                              <InputFiltrar/>
                        </section>
                        <section id="cajaUsuarioNoEncontrado">
                              <img src={ZorroMaltia} alt='Elemento no encontrado.'/>
                              <div>
                                    <h1>Parece que tu búsqueda no ha arrojado resultados.</h1>
                                    <p>Prueba con otro usuario :)</p>
                              </div>
                        </section>
                  </section>
            </main>
      </React.Fragment>
      );
}
  
export default UsuarioNoEncontrado1;