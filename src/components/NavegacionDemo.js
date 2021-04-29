import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';

function NavegacionDemo() {
  return (
    <header id='AppHeader'>
    ¡Bienvenido al sistema de Maltia!
      <nav id="navAppDemostracion">
        <Link to='/administrarUsuarios'>Administración usuarios ADMIN</Link>
        <Link to='/administrarProspectos'>Administración prospectos ASESOR</Link>  
        <Link to='/solicitudes'>Administración solicitudes ANALISTA</Link>                
      </nav>
  </header>
  );
};

export default NavegacionDemo;