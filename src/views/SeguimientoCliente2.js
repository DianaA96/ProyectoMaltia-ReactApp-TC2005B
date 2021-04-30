import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import PasosSeguimiento from '../components/PasosSeguimiento'
import admin from '../assets/persona.svg';
import ToggleSwitch from '../components/ToggleSwitch';
import InfoSolicitud from '../components/InfoSolicitud';
import BotonRegresar from '../components/BotonRegresar';
import './SeguimientoCliente1.css'; //Se toman los estilos de la primera vista de seguimiento cliente al tener las mismas clases
import './SeguimientoCliente2.css'; //Estilos para elementos diferentes en la vista
import axios from 'axios'


import React, {useState, useEffect} from 'react'
import IdleStateView from '../components/IdleStateView'
import ErrorScreen from '../components/ErrorScreen'

function SeguimientoCliente2(props) {
        let enlaces = ["./", "./nuevo-usuario"]
        let tabs = ["Solicitudes", "Generar Reportes"];
        const [TabFocus, setTabFocus] = useState(0);

        const [ status, setStatus ] = useState('idle');
        const [ error, setError ] = useState(null);
        const [ statusToggle1,setStatusToggle1 ] = useState(false);
        const [ statusToggle2,setStatusToggle2 ] = useState(false);
        const [ prospect, setProspect] = useState([]);
        const [ ref, setRef] = useState([]);
        const [ formStatus, setFormStatus ] = useState('pristine');
        const [seguimientoFocus, setSeguimientoFocus] = useState(2)

        function setToggle1(event){
            setStatusToggle1(!statusToggle1);
            setFormStatus('dirty')
        }

        function setToggle2(event){
            setStatusToggle2(!statusToggle2);
            setFormStatus('dirty')
        }

        function handleSave(event){
            
            axios.patch(`http://localhost:5000/applications/${prospect.idApplication}`, {
                body: {
                    estatus: "Revision",
                    altaIsi: statusToggle1,
                    auditoriaBuro: statusToggle2
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
                    setStatusToggle1(result.data.infoSolicitud[0].altaIsi)
                    setStatusToggle2(result.data.infoSolicitud[0].auditoriaBuro)
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
                
                    <main>
                        <aside>
                            <Lateral TabFocus={TabFocus} setTabFocus ={setTabFocus} img = {admin} usuario={`http://localhost:5000/employees/assessor?thisAssessor=zorro14`} tabs={tabs} enlaces={enlaces}/>
                        </aside>
                        <section className='contentPageSeguimiento'>
                            <header>
                                <Bienvenida txtBienvenida = "Bienvenido, Administrador" txtVentana="Seguimiento de solicitudes"/>
                                <BotonRegresar/> 
                            </header>
                            <section className="pasosContentPageSeguimiento">
                                <h2 className="nombreCliente">{prospect.nombre} {prospect.apellidoPaterno} {prospect.apellidoMaterno}</h2>
                                <PasosSeguimiento id1={props.match.params.idProspect} seguimientoFocus={seguimientoFocus} setSeguimientoFocus={setSeguimientoFocus}/>
                            </section>
                            <section className="mainContentPageSeguimiento">
                            <form onSubmit={handleSave}>
                                <div className="accionesSeguimiento">
                                    <div className="toggle-cont">
                                        <p className="alta-isi">Alta en ISI</p>
                                        <ToggleSwitch isChecked={prospect.altaIsi} setToggle={setToggle1}/>
                                    </div>
                                    <div className="toggle-cont">
                                        <p className="auditoria-buro">Auditado en buró</p>
                                        <ToggleSwitch isChecked={prospect.auditoriaBuro} setToggle={setToggle2}/>                                        
                                    </div>
                                    <button className="botonSalmon btn-guardar-cambios" type='submit' disabled={formStatus === 'pristine'?true:null}>Guardar Cambios</button>
                                </div>
                            </form>
                            <div className="lineaSeguimiento"></div>
                            
                            <InfoSolicitud id={props.match.params.idProspect}/>
                        </section>
                    </section>
                </main>
            
        );
    }
}

export default SeguimientoCliente2;