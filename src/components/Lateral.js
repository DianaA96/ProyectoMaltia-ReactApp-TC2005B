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
            
            <nav class="menuMobile" role="navigation">
                <div id="hamburgerMenu">
                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
                <ul id="foldingMenu">
                    {props.tabs.map((ventana) =>
                        <li key={ventana}><Link to={ventana.replace(/ /g, "")}>{ventana}</Link></li>
                    )}
                </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}
export default Lateral;