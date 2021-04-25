//import React from 'react';
import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import PasosSeguimiento from '../components/PasosSeguimiento';
import admin from '../assets/persona.svg';
import InfoSolicitud from '../components/InfoSolicitud';
import BotonRegresar from '../components/BotonRegresar';
import '../components/plantillaInputs.css'
import './SeguimientoCliente1.css'; //Se toman los estilos de la primera vista de seguimiento cliente al tener las mismas clases

import axios from 'axios'


import React, {useState, useEffect} from 'react'
import IdleStateView from '../components/IdleStateView'
import ErrorScreen from '../components/ErrorScreen'

function SeguimientoCliente3(props) {
        let enlaces = ["./", "./nuevo-usuario"]
        let tabs = ["Solicitudes", "Generar Reportes"];

        //
        const [ status, setStatus ] = useState('idle');
        const [ error, setError ] = useState(null);

        const [prospect, setProspect] = useState([]);
        const[ref,setRef]=useState([]);
        useEffect(()=>{
            setStatus('loading')
           
            axios.get(`http://localhost:5000/applications/full-application-data/${props.match.params.idProspect}`) 
                .then((result)=>{
                    
                    setProspect(result.data.infoSolicitud[0])
                    setRef(result.data.referencias[0])
                    setStatus('resolved')
                })
                .catch((error)=>{
                    setError(error)
                    setStatus('error')
                })

        }, [])

        if(status === 'idle' || status === 'loading'){
            return <IdleStateView/>
        }


        if(status === 'error'){
            return (
            <ErrorScreen mensaje = {error.message}/>
            )
        }


        if(status === 'resolved'){
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
                                <h2 className="nombreCliente">{prospect.nombre} {prospect.apellidoPaterno} {prospect.apellidoMaterno}</h2>
                                <PasosSeguimiento id1={props.match.params.idProspect}/>
                            </section>
                            <section className="mainContentPageSeguimiento">
                                <div className="accionesSeguimiento">
                                    <input className= "input-gral w-1" type="text" name="Crédito autorizado" placeholder="Crédito autorizado"/>
                                    <input className= "input-gral w-1" type="text" name="Crédito dispuesto"  placeholder="Crédito dispuesto"/>
                                    <button className="botonSalmon btn-guardar-cambios">Guardar Cambios</button>
                                </div>
                                <div className="lineaSeguimiento"></div>
                                <InfoSolicitud id={props.match.params.idProspect}/>
                            </section>
                        </section>
                    </main>
                </React.Fragment>
            );
        }
}

export default SeguimientoCliente3;