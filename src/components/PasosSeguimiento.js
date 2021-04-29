import React from 'react'
import './PasosSeguimiento.css'
import zorro from '../assets/ZorroSeguimiento.png'
import CustomLink from './CustomLink';

function PasosSeguimiento(props) {
    return (
        <div className="cont-seguimiento">
            <div className="circulo-texto">
                <button href="" className="cons-zorro">
                    <div className="circulo-seguimiento">
                        <CustomLink 
                            tag="div" 
                            to={`/seguimientoCliente1/${props.id1}`} 
                            className="circulo-seguimiento">
                                <img src={zorro} alt=""/>
                        </CustomLink>
                    </div>
                </button> 
                <h5>Consulta Zorro Abarrotero</h5>
            </div>
            <div className="circulo-texto">
                <button href="" className="cons-zorro">
                    <div className="circulo-seguimiento">
                        <CustomLink 
                            tag="div" 
                            to={`/seguimientoCliente2/${props.id1}`} 
                            className="circulo-seguimiento">
                                <i class="fas fa-users"></i>
                        </CustomLink>
                    </div>
                </button>
                <h5>Verificación Buró de Crédito</h5>
            </div>
            <div className="circulo-texto">
                <button href="" className="cons-zorro">
                    <div className="circulo-seguimiento">
                        <CustomLink 
                            tag="div" 
                            to={`/seguimientoCliente3/${props.id1}`} 
                            className="circulo-seguimiento">
                                <i class="fas fa-check-double"></i>
                        </CustomLink>
                    </div>
                </button>
                <h5>Disposición</h5>
            </div>   
            <div className="lineaPasos"></div>
        </div>
    )
}

export default PasosSeguimiento