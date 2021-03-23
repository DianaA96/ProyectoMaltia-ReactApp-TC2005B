import React from 'react';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import PasosSeguimiento from './PasosSeguimiento'
import admin from './assets/persona.svg';
import ToggleSwitch from './ToggleSwitch';
import InfoSolicitud from './InfoSolicitud';
import BotonRegresar from './BotonRegresar';
import './SeguimientoCliente1.css'; //Se toman los estilos de la primera vista de seguimiento cliente al tener las mismas clases
import './SeguimientoCliente2.css'; //Estilos para elementos diferentes en la vista


function SeguimientoCliente2() {
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
                            <div className="toggle-cont">
                                <p className="alta-isi">Alta en ISI</p>
                                <ToggleSwitch/>
                            </div>
                            <div className="toggle-cont">
                                <p className="auditoria-buro">Auditado</p>
                                <ToggleSwitch/>
                            </div>
                        </div>
                        <div className="lineaSeguimiento"></div>
                        
                        <InfoSolicitud/>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default SeguimientoCliente2;