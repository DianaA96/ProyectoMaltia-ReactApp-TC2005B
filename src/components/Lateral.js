import React, { useEffect, useState } from 'react';
import './Lateral.css';
import TabLateral from './TabLateral';
import { useAuth } from '../auth-context';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom';

function Lateral(props){

    const { logout } = useAuth();
    const [ assessorData, setAssessorData ] = useState({})
    const [ status, setStatus ] = useState('idle');
    const [ error, setError ] = useState(null);

    useEffect(()=>{
        setStatus('loading')
        axios.get(props.usuario) 
              .then((result)=>{
                console.log(result)
                setAssessorData(result.data.datosEmpleado)
                setStatus('resolved')
              })
              .catch((error)=>{
                  setError(error)
                  setStatus('error')
              })
      }, [])

    return(
        <React.Fragment>
            <div className="contenedor-lateral">
                <div className = "datos_usuario">
                    <div className="cont_icono">
                        <img className="icono_usuario" src={props.img} alt=""/>
                    </div>
                    <h4 className="nombre_usuario">{`${assessorData.nombre} ${assessorData.apellidoPaterno}`}</h4>
                </div>

                <div className='tabs'>
                    {props.tabs.map((ventana, index) =>
                        <TabLateral key={ventana} idx={index} name={ventana} setTabFocus={props.setTabFocus} TabFocus={props.TabFocus}/>
                    )}
                </div>
                    
                <div className="logout">
                    <button  
                        onClick={logout} 
                        className="logout">
                            <i class="fas fa-sign-out-alt"></i>Cerrar sesión</button>
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
                            <React.Fragment >
                                <li key={ventana}><Link to={'/'+(ventana.replace(/ /g, ""))}>{ventana} </Link></li>
                            </React.Fragment>
                        )}
                        <li><button className="logoutMobileMenu" onClick={logout} to='/login'>Cerrar sesión <i class="fas fa-sign-out-alt"></i></button>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}
export default Lateral;