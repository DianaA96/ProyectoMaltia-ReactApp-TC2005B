import React from 'react';
import './Lateral.css';
import CustomLink from './CustomLink';
import TabLateral from './TabLateral';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom';

function Lateral(props){
    return(
        <React.Fragment>
            <div className="contenedor-lateral">
                <div className = "datos_usuario">
                        <div className="cont_icono">
                            <img className="icono_usuario" src={props.img} alt=""/>
                        </div>
                        <h4 className="nombre_usuario">{props.usuario}</h4>
                </div>

                <div className='tabs'>
                    {props.tabs.map((ventana) =>
                        <TabLateral key={ventana} name={ventana}/>
                    )}
                </div>
                    
                <div className="logout">
                    <a><Link to='./login'><i class="fas fa-sign-out-alt"></i></Link></a>
                    <CustomLink tag='p' to='./login' className="logout">Cerrar sesión</CustomLink>
                </div>
            </div>
            
            <div className="tabsMoviles"> 
                <input type="radio" name="tap" id="t0" checked="checked"/>
                <label class="round" for="t0"><i class="fas fa-list"></i></label>
                
                <input type="radio" name="tap" id="t1"/>
                <label class="round" for="t1"><i class="fas fa-plus-square"></i></label>
            </div>
        </React.Fragment>
    );
}
export default Lateral;