import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

//Inicio de sesión general. Llevará por defecto al Administrador
import VentanaInicioSesion from './views/VentanaInicioSesion'; //CORRECTO FormAutenticacion

//Vistas Administrador
import LandingAdminUsuarios from './views/LandingAdminUsuarios'; //CORRECTO TablaUsuarios, lateral
import VentanaAgregarUsuario from './views/VentanaAgregarUsuario'; //CORRECTO Links funcionan
import VentanaEditarUsuario from './views/VentanaEditarUsuario'; //CORRECTO links funcionan
import Deshabilitar from './views/ModalDeshabilitarEmpleado'; //CORRECTO links funcionan
import UsuarioNoEncontrado1 from './views/UsuarioNoEncontrado1'; //CORRECTO

//Vistas Asesor
import LandingAdminProspectos from './views/LandingAdminProspectos'; //CORRECTO links funcionan
import ContactoAsesor from './views/ModalContactoAsesor'; //CORRECTO
import AgregarProspecto from './views/AgregarProspecto';//CORRECTO
import EditarProspecto from './views/EditarProspecto';//CORRECTO
import SolicitudCliente from './views/SolicitudCliente'; //CORRECTO
import AdministracionClientesAsesor from './views/AdministracionClientesAsesor';//CORRECTO
import EditarSolicitudCliente from './views/EditarSolicitudCliente';//CORRECTO
import UsuarioNoEncontrado2 from './views/UsuarioNoEncontrado2'; //CORRECTO
import UsuarioNoEncontrado21 from './views/UsuarioNoEncontrado2_1'; //CORRECTO

//Vistas Analista
import LandingAnalista from './views/LandingAnalista'; //CORRECTO
import SeguimientoCliente1 from './views/SeguimientoCliente1'; //CORRECTO
import SeguimientoCliente2 from './views/SeguimientoCliente2'; //CORRECTO
import SeguimientoCliente3 from './views/SeguimientoCliente3'; //CORRECTO
import UsuarioNoEncontrado3 from './views/UsuarioNoEncontrado3'; //CORRECTO

function App() {

//Props simuladas que deben pasarse en donde se llame al componente(necesarios para renderear la solicitud del cliente):
  let datosSolicitudCliente = {
      nombreCliente: "José Herón Samperio León",
      numTelCliente: "771 235 82 73",
  }

  return (
    <Router>
      <Switch>
        <Route path='/login' exact={true}>{VentanaInicioSesion}</Route>

        <Route path='/administrarUsuarios' exact={true}>{LandingAdminUsuarios}</Route>
        <Route path='/agregarUsuario' exact={true}>{VentanaAgregarUsuario}</Route>
        <Route path='/editarUsuario' exact={true}>{VentanaEditarUsuario}</Route>
        <Route path='/eliminarUsuario' exact={true}>{Deshabilitar}</Route>
        <Route path='/user-not-found1' exact={true}>{UsuarioNoEncontrado1}</Route>

        <Route path='/administrarProspectos' exact={true}>{LandingAdminProspectos}</Route>
        <Route path='/contactarProspecto' exact={true}>{ContactoAsesor}</Route>
        <Route path='/agregarProspectos' exact={true}>{AgregarProspecto}</Route>
        <Route path='/editarProspecto' exact={true}>{EditarProspecto}</Route>
        <Route path='/solicitudCliente' exact={true}><SolicitudCliente{...datosSolicitudCliente}/></Route>
        <Route path='/administrarClientes' exact={true}>{AdministracionClientesAsesor}</Route>
        <Route path='/user-not-found2' exact={true}>{UsuarioNoEncontrado2}</Route>
        <Route path='/user-not-found21' exact={true}>{UsuarioNoEncontrado21}</Route>
        <Route path='/editarSolicitudCliente' exact={true}><EditarSolicitudCliente/></Route>
        
        <Route path='/solicitudes' exact={true}>{LandingAnalista}</Route>
        <Route path='/seguimientoCliente1' exact={true}>{SeguimientoCliente1}</Route>
        <Route path='/seguimientoCliente2' exact={true}>{SeguimientoCliente2}</Route>
        <Route path='/seguimientoCliente3' exact={true}>{SeguimientoCliente3}</Route>
        <Route path='/user-not-found3' exact={true}>{UsuarioNoEncontrado3}</Route>
        
        <Route path='/' exact={true}>
          <header id='AppHeader'>
            ¡Bienvenido al sistema de Maltia!
              <nav id="navAppDemostracion">
                <Link to='./login'>Iniciar Sesión</Link>
                <Link to='/administrarUsuarios'>Administración usuarios ADMIN</Link>
                <Link to='/administrarProspectos'>Administración prospectos ASESOR</Link>  
                <Link to='/solicitudes'>Administración solicitudes ANALISTA</Link>                
              </nav>
          </header>
        </Route>
        <Route>¡Ups! Parece que esta ruta todavía no te llevará a ninguna parte :c</Route>
      </Switch>
    </Router>
  );
}

export default App;