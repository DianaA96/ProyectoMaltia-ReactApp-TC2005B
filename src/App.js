import React from 'react';
import './App.css';
import LandingAdminUsuarios from './LandingAdminUsuarios';
import SolicitudCliente from './SolicitudCliente';
import UsuarioNoEncontrado from './UsuarioNoEncontrado';
import VentanaAgregarUsuario from './VentanaAgregarUsuario';
import VentanaEditarUsuario from './VentanaEditarUsuario';
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
        <Route path='/administrarUsuarios' exact={true}>{LandingAdminUsuarios}</Route>
        <Route path='/iniciar-solicitud' exact={true}>{SolicitudCliente(datosSolicitudCliente)}</Route>
        <Route path='/user-not-found' exact={true}>{UsuarioNoEncontrado}</Route>
        <Route path='/AgregarUsuario' exact={true}>{VentanaAgregarUsuario}</Route>
        <Route path='/EditarUsuario' exact={true}>{VentanaEditarUsuario}</Route>
        <Route path='/login' exact={true}>{VentanaInicioSesion}</Route>
        <Route path='/' exact={true}>
          <header id='AppHeader'>
            Welcome!
            <nav id="navAppDemostracion">
              <Link to='./users-list'>Lista de usuarios</Link>
              <Link to='./iniciar-solicitud'>SolicitudCliente</Link>
              <Link to='./user-not-found'>UsuarioNoEncontrado</Link>
              <Link to='./AgregarUsuario'>AgregarUsuario</Link>
              <Link to='./login'>Iniciar Sesión</Link>
            </nav>
          </header>
        </Route>
        <Route>Not found!!!!!!!!!!!!!! :c</Route>
      </Switch>
    </Router>
  );
}

export default App;