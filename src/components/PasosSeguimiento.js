import React from 'react'
import './PasosSeguimiento.css'
import zorro from '../assets/ZorroSeguimiento.png'
import CustomLink from './CustomLink';

function PasosSeguimiento(props) {

    function changeFocus(event){
        props.setSeguimientoFocus(event.target.name)
        console.log(event.target.name)
    }

    return (
        <div className="cont-seguimiento">
            <div className="circulo-texto">
                <button href="" className="cons-zorro">
                    <div name = "1" 
                        className={`${props.seguimientoFocus === 1 ? "circulo-focus" : "circulo-seguimiento"}`} 
                        onClick={changeFocus}
                    >
                        <CustomLink 
                            tag="button" 
                            name = "1" 
                            to={`/seguimientoCliente1/${props.id1}`} 
                            className={`${props.seguimientoFocus === 1 ? "circulo-focus" : "circulo-seguimiento"}`} 
                            onClick={changeFocus}><img 
                            src={zorro} 
                            alt=""/></CustomLink>
                    </div>
                </button> 
                <h5>Consulta Zorro Abarrotero</h5>
            </div>
            <div className="circulo-texto">
                <button href="" className="cons-zorro">
                    <div 
                        name = "2" 
                        className={`${props.seguimientoFocus === 2 ? "circulo-focus" : "circulo-seguimiento"}`} 
                        onFocus={changeFocus}
                    >
                        <CustomLink 
                            tag="button" 
                            to={`/seguimientoCliente2/${props.id1}`} 
                            className={`${props.seguimientoFocus === 2 ? "circulo-focus" : "circulo-seguimiento"}`}>
                                <i class="fas fa-users"></i>
                        </CustomLink>
                    </div>
                </button>
                <h5>Verificación Buró de Crédito</h5>
            </div>
            <div className="circulo-texto">
                <button href="" className="cons-zorro">
                    <div 
                        name = "3" 
                        className={`${props.seguimientoFocus === 3 ? "circulo-focus" : "circulo-seguimiento"}`} 
                        onFocus={changeFocus}
                    >
                        <CustomLink 
                            tag="button" 
                            to={`/seguimientoCliente3/${props.id1}`} 
                            className={`${props.seguimientoFocus === 3 ? "circulo-focus" : "circulo-seguimiento"}`}>
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