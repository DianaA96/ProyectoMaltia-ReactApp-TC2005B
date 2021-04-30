import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import PasosSeguimiento from '../components/PasosSeguimiento';
import admin from '../assets/persona.svg';
import InfoSolicitud from '../components/InfoSolicitud';
import BotonRegresar from '../components/BotonRegresar';
import '../components/plantillaInputs.css'
import './SeguimientoCliente1.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import IdleStateView from '../components/IdleStateView'
import ErrorScreen from '../components/ErrorScreen'

function SeguimientoCliente3(props) {
    let enlaces = ["./", "./nuevo-usuario"]
    let tabs = ["Solicitudes", "Generar Reportes"];
    const [TabFocus, setTabFocus] = useState(0);
    const [seguimientoFocus, setSeguimientoFocus] = useState(3)
    const [ status, setStatus ] = useState('idle');
    const [ error, setError ] = useState(null);
    const [ formStatus, setFormStatus ] = useState('pristine');
    const [ montoAutorizado, setMontoAutorizado ] = useState(0);
    const [ montoDispuesto, setMontoDispuesto ] = useState(0);
    const [ prospect, setProspect ] = useState([]);
    const [ ref, setRef ] = useState([]);

    function handleChangeMontoAut(event){
        setMontoAutorizado(event.target.value)
        setFormStatus('dirty')
    }

    function handleChangeMontoDisp(event){
        setMontoDispuesto(event.target.value)
        setFormStatus('dirty')
    }

    function handleSave(event){
        axios.patch(`http://localhost:5000/applications/${prospect.idApplication}`, {
            body: {
                montoAutorizado,
                montoDispuesto
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
                setMontoAutorizado(result.data.infoSolicitud[0].montoAutorizado)
                setMontoDispuesto(result.data.infoSolicitud[0].montoDispuesto)
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
                        <Lateral 
                            TabFocus={TabFocus} 
                            setTabFocus={setTabFocus} 
                            img = {admin} 
                            usuario={`http://localhost:5000/employees/assessor?thisAssessor=zorro14`} 
                            tabs={tabs} 
                            enlaces={enlaces}/>
                    </aside>
                    <section className='contentPageSeguimiento'>
                        <header>
                            <Bienvenida 
                                txtBienvenida = "Bienvenido, Administrador" 
                                txtVentana="Seguimiento de solicitudes"
                            />
                            <BotonRegresar/>
                        </header>
                        <section className="pasosContentPageSeguimiento">
                            <h2 className="nombreCliente">{prospect.nombre} {prospect.apellidoPaterno} {prospect.apellidoMaterno}</h2>
                            <PasosSeguimiento 
                                id1={props.match.params.idProspect} 
                                seguimientoFocus={seguimientoFocus} 
                                setSeguimientoFocus={setSeguimientoFocus}
                            />
                        </section>
                        <section className="mainContentPageSeguimiento">
                        <form onSubmit={handleSave}>
                            <div className="accionesSeguimiento">
                                <div className='grupoInput'>
                                    <input 
                                        className= "input-gral w-1 inputFormularios" 
                                        placeholder="Monto autorizado" 
                                        type="text" 
                                        name="montoAutorizado" 
                                        value={montoAutorizado} 
                                        onChange = {handleChangeMontoAut}
                                    />                            
                                    <label 
                                        htmlFor="name" 
                                        className="etiquetaInputs">
                                            Monto autorizado del crédito (Numero entero, sin comas)
                                    </label>
                                </div>
                                <div className='grupoInput'>
                                <input 
                                    className= "input-gral w-1 inputFormularios" 
                                    placeholder="Monto dispuesto del crédito" 
                                    type="text" 
                                    name="montoDispuesto"  
                                    value={montoDispuesto} 
                                    onChange = {handleChangeMontoDisp}
                                />                            
                                    <label 
                                        htmlFor="name" 
                                        className="etiquetaInputs">
                                            Monto dispuesto del crédito (Numero entero, sin comas)
                                    </label>
                                </div>
                                
                                
                                <button 
                                    className="botonSalmon btn-guardar-cambios"  
                                    type='submit' 
                                    disabled={formStatus === 'pristine'?true:null}>
                                        Guardar cambios
                                </button>
                            </div>
                        </form>
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