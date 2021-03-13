import React from 'react';
import './App.css';
import LandingAdminUsuarios from './LandingAdminUsuarios';
import LandingAdminProspectos from './LandingAdminProspectos';
import Aprospecto from './Aprospecto';
import AdministracionClientesAsesor from './AdministracionClientesAsesor';
import UsuarioNoEncontrado from './UsuarioNoEncontrado';
import VentanaAgregarUsuario from './VentanaAgregarUsuario';
import VentanaEditarUsuario from './VentanaEditarUsuario';
import VentanaInicioSesion from './VentanaInicioSesion';
import Eprospecto from './Eprospecto';
import ContactoAsesor from './ContactoAsesor';
import SolicitudCliente from './SolicitudCliente';
import TablaAdminClientesAsesor from './TablaAdminClientesAsesor';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom';

function App() {

//Props simuladas que deben pasarse en donde se llame al componente:
  let datosSolicitudCliente = {
      nombreCliente: "José Herón Samperio León",
      numTelCliente: "771 235 82 73",
  }

  let dataQuery={
    data: [
      {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
      {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
      {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
      {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
      {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
      {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
      {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
      {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
      {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
      {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
      {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
    ]
  };

  return (
    <Router>
      <Switch>
        <Route path='/administrarUsuarios' exact={true}>{LandingAdminUsuarios}</Route>
        <Route path='/administrarProspectos' exact={true}>{LandingAdminProspectos}</Route>
        <Route path='/agregarProspectos' exact={true}>{Aprospecto}</Route>
        <Route path='/editarProspecto' exact={true}>{Eprospecto}</Route>
        <Route path='/contactarProspecto' exact={true}>{ContactoAsesor}</Route>
        <Route path='/administrarClientes' exact={true}>{AdministracionClientesAsesor}</Route>
        <Route path='/solicitudCliente' exact={true}><SolicitudCliente{...datosSolicitudCliente}/></Route>
        <Route path='/user-not-found' exact={true}>{UsuarioNoEncontrado}</Route>
        <Route path='/AgregarUsuario' exact={true}>{VentanaAgregarUsuario}</Route>
        <Route path='/EditarUsuario' exact={true}>{VentanaEditarUsuario}</Route>
        <Route path='/login' exact={true}>{VentanaInicioSesion}</Route>
        <Route path='/administracionClientes' exact={true}><TablaAdminClientesAsesor{...dataQuery}/></Route>
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