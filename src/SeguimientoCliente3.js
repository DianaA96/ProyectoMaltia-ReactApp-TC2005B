import React from 'react';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import PasosSeguimiento from './PasosSeguimiento';
import admin from './assets/persona.svg';
import InfoSolicitud from './InfoSolicitud';
import BotonRegresar from './BotonRegresar';
import './plantillaInputs.css'
import './SeguimientoCliente1.css'; //Se toman los estilos de la primera vista de seguimiento cliente al tener las mismas clases


function SeguimientoCliente3() {
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
                        <Bienvenida txtBienvenida = "Bienvenido, Administrador" txtVentana="Seguimiento de solicitudes"/>
                        <BotonRegresar/>
                    </header>
                    <section className="pasosContentPageSeguimiento">
                        <h2 className="nombreCliente">Harry José Potter Hernandez</h2>
                        <PasosSeguimiento/>
                    </section>
                    <section className="mainContentPageSeguimiento">
                        <div className="accionesSeguimiento">
                            <input className= "input-gral w-1" type="text" name="Crédito autorizado" placeholder="Crédito autorizado"/>
                            <input className= "input-gral w-1" type="text" name="Crédito dispuesto"  placeholder="Crédito dispuesto"/>
                        </div>
                        <div className="lineaSeguimiento"></div>
                        <InfoSolicitud/>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default SeguimientoCliente3;