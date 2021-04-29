
import './SeguimientoCliente1.css';
import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import PasosSeguimiento from '../components/PasosSeguimiento'
import analista from '../assets/asesor.png';
import Checkbox from '../components/Checkbox'
import InfoSolicitud from '../components/InfoSolicitud'
import BotonRegresar from '../components/BotonRegresar'
import '../components/plantillaInputs.css'
import '../components/Boton.css'

import axios from 'axios'

import React, {useState, useEffect} from 'react'
import IdleStateView from '../components/IdleStateView'
import ErrorScreen from '../components/ErrorScreen'



function SeguimientoCliente1(props) {
      
        let enlaces = ["./", "./nuevo-usuario"]
        let tabs = ["Solicitudes", "Generar Reportes"];

        const [ status, setStatus ] = useState('idle');
        const [ error, setError ] = useState(null);
        const [ formStatus, setFormStatus ] = useState('pristine');

        const [ antiguedadMinima, setAntiguedadMinima ] = useState(false);
        const [ capacidadPago, setCapacidadPago ] = useState(false);

        const [ varAntiguedadMinima, setVarAntiguedadMinima ] = useState(0);
        const [ varCapacidadPago, setVarCapacidadPago ] = useState(0);

        const [ prospect, setProspect ] = useState([]);
        const [ ref, setRef ] = useState([]);

        function handleChangeAntiguedad(event){
            setAntiguedadMinima(!antiguedadMinima)
        }

        function handleChangeCapacidad(event){
            setCapacidadPago(!capacidadPago)
        }

        function handleChangeVarAntiguedad(event){
            setVarAntiguedadMinima(event.target.value)
            setFormStatus('dirty')
        }

        function handleChangeVarCapacidad(event){
            setVarCapacidadPago(event.target.value)
            setFormStatus('dirty')
        }

        function handleSave(event){
                        
            axios.patch(`http://localhost:5000/applications/${prospect.idApplication}`, {
                body: {
                    antiguedadZorro: varAntiguedadMinima,
                    capacidadZorro: varCapacidadPago
                },

                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then((result)=>{
                    setStatus('resolved')
                })
                .catch(error =>{
                    setError(error)
                    setStatus('error')
                })
            formStatus !== 'error'? alert("¡Seguimiento realizado correctamente!😎🦊") : alert("Ocurrió un error al actualizar :(")
        }

        useEffect(()=>{
            setStatus('loading')
           
            axios.get(`http://localhost:5000/applications/full-application-data/${props.match.params.idProspect}`) 
                .then((result)=>{
                    setProspect(result.data.infoSolicitud[0])
                    setRef(result.data.referencias[0])
                    setStatus('resolved')
                    setVarAntiguedadMinima(result.data.infoSolicitud[0].antiguedadZorro)
                    setVarCapacidadPago(result.data.infoSolicitud[0].capacidadZorro)
                    setAntiguedadMinima(result.data.infoSolicitud[0].antiguedadZorro?true:false)
                    setCapacidadPago(result.data.infoSolicitud[0].capacidadZorro?true:false)
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
            //prospect.antiguedadZorro=2;
            return(
                    <main>
                        <aside>
                            <Lateral img = {analista} usuario={`http://localhost:5000/employees/assessor?thisAssessor=zorro14`} tabs={tabs} enlaces={enlaces}/>
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
                            <form onSubmit={handleSave}>
                                <section className="mainContentPageSeguimiento">
                                    <div className="accionesSeguimiento">
                                        <p className="pregunta-antiguedad">¿Cumple con la antigüedad mínima?</p>
                                        <Checkbox isDefaultChecked={antiguedadMinima} isDisabled={null} setCheckTrue={handleChangeAntiguedad}/>
                                        <div className='grupoInput'>
                                            <input placeholder="Antigüedad Zorro abarrotero"className = "input-gral w-1 inputFormularios" type="date" name="antiguedadZorro" id="dateInput" value={varAntiguedadMinima} onChange={handleChangeVarAntiguedad} />                            
                                            <label htmlFor="name" className="etiquetaInputs">Cliente Zorro Abarrotero desde: (formato dd/mm/aaaa)</label>
                                        </div>
                                        <p className="texto-ayuda"></p>
                                        <p className="pregunta-capacidad">¿Cumple con la capacidad de pago mínima?</p>
                                        <Checkbox isDefaultChecked={capacidadPago} isDisabled={null} setCheckTrue={handleChangeCapacidad}/>
                                        <div className='grupoInput'>
                                            <input className = "input-gral w-1 inputFormularios" placeholder="Capacidad de pago" type="text" name="capacidadZorro" id="" value={varCapacidadPago} onChange={handleChangeVarCapacidad} />                            
                                            <label htmlFor="name" className="etiquetaInputs">Especifique la capacidad de pago: (%)</label>
                                        </div>
                                        
                                        <button className="botonSalmon btn-guardar-cambios" type='submit' disabled={formStatus === 'pristine'?true:null}>Guardar Cambios</button>
                                    </div>
                                    <div className="lineaSeguimiento"></div>
                                <InfoSolicitud id={props.match.params.idProspect}/>
                                </section>
                            </form>
                        </section>
                    </main>
            );
        }
    
}

export default SeguimientoCliente1;