import React from 'react';
import './UsuarioNoEncontrado.css';
import ZorroMaltia from '../assets/zorroMaltiaNotFound.svg';
import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import InputBuscar from '../components/InputBuscar';
import InputFiltrar from '../components/InputFiltrar';
import asesor from '../assets/asesor.png';

function UsuarioNoEncontrado21() {
      
      let tabs = ["Administrar prospectos", "Agregar prospectos", "Administrar clientes"];

    return (
      <React.Fragment>
            <main>
                  <aside>
                        <Lateral img = {asesor} usuario="Asesor #1234" tabs={tabs}/>
                  </aside>
                  <section className='contentPage'>
                        <header>
                              <Bienvenida txtBienvenida = "Bienvenido, Asesor" txtVentana="Administración de clientes"/>
                        </header>
                        <section className="filtrosContentPage">
                              <InputBuscar num={21}/>
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
  
export default UsuarioNoEncontrado21;