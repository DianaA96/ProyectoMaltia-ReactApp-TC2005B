import React from 'react';
import './SeguimientoCliente1.css';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import PasosSeguimiento from './PasosSeguimiento'
import admin from './persona.svg';
import Checkbox from './Checkbox'
import './plantillaInputs.css'

function SeguimientoCliente1() {
        let enlaces = ["./", "./nuevo-usuario"]
        let tabs = ["Solicitudes", "Generar Reportes"];
    return(
        <React.Fragment>
            <main>
                <aside>
                    <Lateral img = {admin} usuario="Admin #1234" tabs={tabs} enlaces={enlaces}/>
                </aside>
                <section className='contentPageSeguimiento'>
                    <header>
                        <Bienvenida txtbienvenida = "Bienvenido, Administrador" txtventana="Seguimiento de solicitudes"/>
                    </header>
                    <section className="pasosContentPageSeguimiento">
                        <h2 className="nombreCliente">Harry José Potter Hernandez</h2>
                        <PasosSeguimiento/>
                    </section>
                    <section className="mainContentPageSeguimiento">
                        <div className="accionesSeguimiento">
                            <p className="pregunta-antiguedad">¿Cumple con la antiguedad minima?</p>
                            <Checkbox/>
                            <input className = "input-gral w-1" type="text" name="" id="" placeholder=" Especifique la antiguedad"/>
                            <p className="pregunta-capacidad">¿Cumple con la antiguedad minima?</p>
                            <Checkbox/>
                            <input className = "input-gral w-1" type="text" name="" id="" placeholder=" Especifique la capacidad de pago"/>
                        </div>
                        <div className="lineaSeguimiento"></div>
                        
                        <div className="solicitudSeguimiento">
                            <div className="header-sol">
                                <h4 className="credito-solicitado-sol"> Credito Solicitado: $25,000.00</h4>
                                <h4 className="asesor-sol"> <span>Atendido por: </span> Asesor #23978</h4>
                                <h4 className="contactos-sol"> <span>Contactos realizados: </span> 3</h4>
                            </div>
                            <p className="num-telefono-sol"><span>Numero telefónico </span> : 771 123 43 21</p>
                            <p className="correo-sol"><span>Correo Electrónico: </span>  email@us.com</p>
                            <p className="red-sol"> <span>RED: </span>6127</p>
                            <p className="nacimiento-sol"><span>Fecha de nacimiento: </span>23-03-1987</p>
                            <p className="direccion-sol"><span>Dirección: </span> Privet Drive No. 4 Little Whinging, UK.</p>
                            <p className="numIne-sol"><span>Número INE: </span>28936132351</p>
                            <h2 className="titulo-referencias">Referencias</h2>
                            <div className="cont-referencias">
                               <div className="referencia-sol">
                                   <p><span>Harry Potter</span></p>
                                   <p><i class="fas fa-phone-alt"></i> 772 223 23 23</p>
                               </div>
                               <div className="referencia-sol">
                                   <p><span>Hermione Granger</span></p>
                                   <p><i class="fas fa-phone-alt"></i> 772 223 23 23</p>
                               </div>
                               <div className="referencia-sol">
                                   <p><span>Bellatrix Lestrange</span></p>
                                   <p><i class="fas fa-phone-alt"></i> 772 223 23 23</p>
                               </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default SeguimientoCliente1;