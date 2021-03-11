import React from 'react';
import './App.css';
import LandingAdminUsuarios from './LandingAdminUsuarios';
import SolicitudCliente from './SolicitudCliente';
import UsuarioNoEncontrado from './UsuarioNoEncontrado';
import VentanaAgregarUsuario from './VentanaAgregarUsuario';
import VentanaInicioSesion from './VentanaInicioSesion';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom';

function App() {

    let datosSolicitudCliente = {
    nombreCliente: "José Herón Samperio León",
    numTelCliente: "771 235 82 73",
  }

  return (
    <Router>
      <Switch>
        <Route path='/users-list' exact={true}>{LandingAdminUsuarios}</Route>
        <Route path='/iniciar-solicitud' exact={true}>{SolicitudCliente(datosSolicitudCliente)}</Route>
        <Route path='/user-not-found' exact={true}>{UsuarioNoEncontrado}</Route>
        <Route path='/nuevo-usuario' exact={true}>{VentanaAgregarUsuario}</Route>
        <Route path='/login' exact={true}>{VentanaInicioSesion}</Route>
        <Route path='/' exact={true}>
          <header id='AppHeader'>
            Welcome!
            <nav id="navAppDemostracion">
              <Link to='./users-list'>Lista de usuarios</Link>
              <Link to='./iniciar-solicitud'>SolicitudCliente</Link>
              <Link to='./user-not-found'>UsuarioNoEncontrado</Link>
              <Link to='./nuevo-usuario'>AgregarUsuario</Link>
              <Link to='./login'>IniciarSesión</Link>
            </nav>
          </header>
        </Route>
        <Route>Not found!!!!!!!!!!!!!! :c</Route>
      </Switch>
    </Router>
  );
}

export default App;