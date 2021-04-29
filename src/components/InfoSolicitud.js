import './InfoSolicitud.css'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import IdleStateView from '../components/IdleStateView'
import ErrorScreen from '../components/ErrorScreen'

function InfoSolicitud(props) {
    const [ status, setStatus ] = useState('idle');
    const [ error, setError ] = useState(null);
    const [ prospect, setProspect ] = useState( [] );
    const [ ref, setRef ] = useState( [] );
    const [ ref2, setRef2 ] = useState( [] );
    const [ ref3, setRef3 ] = useState( [] );

    useEffect(()=>{

        setStatus('loading')
        
        axios.get(`http://localhost:5000/applications/full-application-data/${props.id}`) 
            .then((result)=>{
                setProspect(result.data.infoSolicitud[0])
                setRef(result.data.referencias[0])
                setRef2(result.data.referencias[1])
                setRef3(result.data.referencias[2])
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
        return (
            <div className="solicitudSeguimiento">
                <div className="header-sol">
                    <h4 className="credito-solicitado-sol"> Credito Solicitado: {prospect.montoAutorizado}</h4>
                    <h4 className="asesor-sol"> <span>Atendido por: </span> Asesor #{prospect.idAssessor}</h4>
                    <h4 className="contactos-sol"> <span>Contactos realizados: </span> {prospect.numeroContactos}</h4>
                </div>
                <p className="num-telefono-sol"><span>Numero telefónico </span> : {prospect.numTelefono}</p>
                <p className="correo-sol"><span>Correo Electrónico: </span>  {prospect.correoElectronico}</p>
                <p className="red-sol"> <span>RED: </span>{prospect.numClienteZorro}</p>
                <p className="nacimiento-sol"><span>Fecha de nacimiento: </span>{prospect.fechaNacimiento}7</p>
                <p className="direccion-sol"><span>Dirección: </span> {prospect.direccion}</p>
                <p className="numIne-sol"><span>Número INE: </span>{prospect.numIne}</p>
                <h2 className="titulo-referencias">Referencias</h2>
                <div className="cont-referencias">
                <div className="referencia-sol">
                    <p><span>{ref.refName}</span></p>
                    <p><i class="fas fa-phone-alt"></i> {ref.numTelefonoReferencia}</p>
                </div>
                <div className="referencia-sol">
                    <p><span>{ref2.refName}</span></p>
                    <p><i class="fas fa-phone-alt"></i> {ref2.numTelefonoReferencia}</p>
                </div>
                <div className="referencia-sol">
                    <p><span>{ref3.refName}</span></p>
                    <p><i class="fas fa-phone-alt"></i> {ref3.numTelefonoReferencia}</p>
                </div>
                </div>
            </div>
        )
    }
}

export default InfoSolicitud;