import React, { useState, useContext } from 'react';
import './Lateral.css';
import CustomLink from './CustomLink';
import TabLateral from './TabLateral';
import { AuthContext } from '../auth-context'

import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom';

function Lateral(props){

    const { logout } = useContext(AuthContext);

    function handleLogout(event){
        event.preventDefault();
        logout()
    }

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
                    <CustomLink onClick={handleLogout} tag='button' to='/login' className="logout">Cerrar sesión</CustomLink>
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
                            <li key={ventana}><Link to={'/'+(ventana.replace(/ /g, ""))}>{ventana}</Link></li>
                        )}
                        <li><button className="logoutMobileMenu" onClick={handleLogout}><Link to='/login'>Cerrar sesión <i class="fas fa-sign-out-alt"></i></Link></button></li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}
export default Lateral;