import React from 'react';
import './UsuarioNoEncontrado.css';
import ZorroMaltia from './img/zorroMaltiaNotFound.svg';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import InputBuscar from './InputBuscar';

function UsuarioNoEncontrado() {
    return (
      <React.Fragment>
            <main>
                  <aside>
                        <Lateral />
                  </aside>
                  <section className='contentPage'>
                        <header>
                              <Bienvenida txtbienvenida = "Bienvenido, Administrador" txtventana="Administración de usuarios"/>
                        </header>
                        <section className="filtrosContentPage">
                              <InputBuscar />
                              <InputBuscar />
                        </section>
                        <section id="cajaUsuarioNoEncontrado">
                                    <img src={ZorroMaltia} alt='Elemento no encontrado.'/> 
                                    <h1>Parece que tu búsqueda no ha arrojado resultados.</h1>
                                    <p>Prueba con otro usuario :)</p>
                        </section>
                  </section>
            </main>
        </React.Fragment>
    );
  }
  
  export default UsuarioNoEncontrado;