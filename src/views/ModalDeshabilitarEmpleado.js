import '../components/Boton.css';
import './ModalDeshabilitarEmpleado.css';
import CustomLink from '../components/CustomLink';
import React,{useState} from 'react'

function Deshabilitar(props){
    
    function hideModal(){
        props.setStatus('hidden')
    }

    return(
        <div className="modalPadre">
            <div className='err'>
                <div className='cabeza'>
                    <i className="fas fa-exclamation-triangle"></i>
                    <p className='eliminando'>Eliminando usuario</p>
                </div>
                <div className='centro'>
                    <p className='us'>Harry José  Potter Hernández</p>
                    <p className='num'>#151561561</p>
                    <p className='pregunta'>¿Está seguro de  deshabilitar a este usuario?</p>
                </div>
                <div className='btns'>
                    <button tag='button' onClick={hideModal} className="botonAzulMarino">Cancelar</button>
                    <button tag='button' onClick={hideModal} className="botonSalmon">Confirmar</button>
                </div>
            </div>
        
        </div>
        
    );
}
export default Deshabilitar;