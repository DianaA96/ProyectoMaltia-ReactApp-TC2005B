import React from 'react'
import './PasosSeguimiento.css'
import zorro from './img/ZorroSeguimiento.png'
function PasosSeguimiento() {
    return (
        <div className="cont-seguimiento">

            <div className="circulo-texto">
                <a href="" className="cons-zorro">
                    <div className="circulo-seguimiento">
                        <img src={zorro} alt=""/>
                    </div>
                </a> 
                <h5>Consulta Zorro Abarrotero</h5>
            </div>

            <div className="circulo-texto">
                <a href="" className="cons-zorro">
                    <div className="circulo-seguimiento">
                        <i class="fas fa-users"></i>
                    </div>
                </a>
                <h5>Verificación Buró de Crédito</h5>
            </div>


            <div className="circulo-texto">
                <a href="" className="cons-zorro">
                    <div className="circulo-seguimiento">
                        <i class="fas fa-check-double"></i>
                    </div>
                </a>
                <h5>Disposición</h5>
            </div>   

            <div className="lineaPasos"></div>
        </div>
    )
}

export default PasosSeguimiento
