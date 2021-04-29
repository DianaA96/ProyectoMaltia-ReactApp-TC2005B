import '../components/Boton.css';
import './ModalDeshabilitarEmpleado.css';
import CustomLink from '../components/CustomLink';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import IdleStateView from '../components/IdleStateView';
import ErrorScreen from '../components/ErrorScreen';

function Deshabilitar(props){
    
    function hideModal(){
        props.setStatus('hidden')
    }

    function deleteEmployee(){
        props.setStatus('hidden')
        axios.delete(`http://localhost:5000/employees/${props.modalData}`)
                .then((result)=>{
                    setEmployee(result.data.datosEmpleado)
                    setStatus('resolved')
                    alert("Empleado " + props.modalData + " deshabilitado")
                })
                .catch((error)=>{
                    setError(error)
                    setStatus('error')
                })
    }

    const [status, setStatus ] = useState('idle');
    const [error, setError] = useState(null);
    const [employee, setEmployee] = useState({});

      useEffect(()=>{
            setStatus('loading')
            axios.get(`http://localhost:5000/employees/${props.modalData}`)
                .then((result)=>{
                    setEmployee(result.data.datosEmpleado)
                    setStatus('resolved')
                })
                .catch((error)=>{
                    setError(error)
                    setStatus('error')
                })
        }, [])

        if(status === 'idle' || status === 'loading'){
            return <IdleStateView></IdleStateView>
        }


        if(status === 'error'){
            return (
                <ErrorScreen mensaje = {error.message} respuesta={error.name}/>
            )
        }

      if(status === 'resolved'){

        return(
            <div className="modalPadre">
                <div className='err'>
                    <div className='cabeza'>
                        <i className="fas fa-exclamation-triangle"></i>
                        <p className='eliminando'>Eliminando usuario</p>
                    </div>
                    <div className='centro'>
                        <p className='us'>{employee.nombre} {employee.apellidoPaterno} {employee.apellidoMaterno}</p>
                        <p className='num'>ID: {props.modalData}</p>
                        <p className='pregunta'>¿Está seguro de  deshabilitar a este usuario?</p>
                    </div>
                    <div className='btns'>
                        <button tag='button' onClick={hideModal} className="botonAzulMarino"><span>Cancelar</span></button>
                        <button tag='button' onClick={deleteEmployee} className="botonSalmon">Confirmar</button>
                    </div>
                </div>
            </div>   
        );
    }
}
export default Deshabilitar;