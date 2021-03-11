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
                <h4>Consulta Zorro Abarrotero</h4>
            </div>

            <div className="circulo-texto">
                <a href="" className="cons-zorro">
                    <div className="circulo-seguimiento">
                        <i class="fas fa-users"></i>
                    </div>
                </a>
                <h4>Verificación Buró de Crédito</h4>
            </div>


            <div className="circulo-texto">
                <a href="" className="cons-zorro">
                    <div className="circulo-seguimiento">
                        <i class="fas fa-check-double"></i>
                    </div>
                </a>
                <h4>Disposición</h4>
            </div>   

            <div className="linea"></div>
        </div>
    )
}

export default PasosSeguimiento
