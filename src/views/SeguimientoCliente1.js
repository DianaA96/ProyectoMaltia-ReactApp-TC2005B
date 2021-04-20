import React from 'react';
import './SeguimientoCliente1.css';
import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import PasosSeguimiento from '../components/PasosSeguimiento'
import admin from '../assets/persona.svg';
import Checkbox from '../components/Checkbox'
import InfoSolicitud from '../components/InfoSolicitud'
import BotonRegresar from '../components/BotonRegresar'
import '../components/plantillaInputs.css'


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
                        <Bienvenida txtBienvenida = "Bienvenido, Administrador" txtVentana="Seguimiento de solicitudes"/>
                        <BotonRegresar/>
                    </header>
                    <section className="pasosContentPageSeguimiento">
                        <h2 className="nombreCliente">Harry José Potter Hernandez</h2>
                        <PasosSeguimiento/>
                    </section>
                    <section className="mainContentPageSeguimiento">
                        <div className="accionesSeguimiento">
                            <p className="pregunta-antiguedad">¿Cumple con la antigüedad mínima?</p>
                            <Checkbox/>
                            <input className = "input-gral w-1" type="text" name="" id="" placeholder=" Antigüedad"/>
                            <p className="texto-ayuda"></p>
                            <p className="pregunta-capacidad">¿Cumple con la capacidad de pago mínima?</p>
                            <Checkbox/>
                            <input className = "input-gral w-1" type="text" name="" id="" placeholder=" Capacidad de pago"/>
                        </div>
                        <div className="lineaSeguimiento"></div>
                       <InfoSolicitud/>
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default SeguimientoCliente1;