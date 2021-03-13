import React from 'react'
import './PasosSeguimiento.css'
import zorro from './img/ZorroSeguimiento.png'
import CustomLink from './CustomLink';

function PasosSeguimiento() {
    return (
        <div className="cont-seguimiento">

            <div className="circulo-texto">
                <a href="" className="cons-zorro">
                    <div className="circulo-seguimiento">
                        <CustomLink tag="div" to='./seguimientoCliente1' className="circulo-seguimiento"><img src={zorro} alt=""/></CustomLink>
                    </div>
                </a> 
                <h5>Consulta Zorro Abarrotero</h5>
            </div>

            <div className="circulo-texto">
                <a href="" className="cons-zorro">
                    <div className="circulo-seguimiento">
                        <CustomLink tag="div" to='./seguimientoCliente2' className="circulo-seguimiento"><i class="fas fa-users"></i></CustomLink>
                    </div>
                </a>
                <h5>Verificación Buró de Crédito</h5>
            </div>


            <div className="circulo-texto">
                <a href="" className="cons-zorro">
                    <div className="circulo-seguimiento">
                        <CustomLink tag="div" to='./seguimientoCliente3' className="circulo-seguimiento"><i class="fas fa-check-double"></i></CustomLink>
                    </div>
                </a>
                <h5>Disposición</h5>
            </div>   

            <div className="lineaPasos"></div>
        </div>
    )
}

export default PasosSeguimiento
