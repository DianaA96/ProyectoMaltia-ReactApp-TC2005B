import React from 'react';
import './App.css';
import { useAuth } from './auth-context';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

//Inicio de sesión general.
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
import NavegacionDemo from './components/NavegacionDemo';

function App() {

  const { user } = useAuth();
  console.log(user)
//Props simuladas que deben pasarse en donde se llame al componente(necesarios para renderear la solicitud del cliente):
  let datosSolicitudCliente = {
      nombreCliente: "José Herón Samperio León",
      numTelCliente: "771 235 82 73",
  }

  return (
    <Router>
      <Switch>
        <Route path='/login' exact={true}>{user?<Redirect to='/'/>:<VentanaInicioSesion/>}</Route>

        <Route path='/administrarUsuarios' exact={true}>{user?<LandingAdminUsuarios/>:<Redirect to='/login'/>}</Route>
        <Route path='/agregarUsuario' exact={true}>{user?<VentanaAgregarUsuario/>:<Redirect to='/login'/>}</Route>
        <Route 
          path="/editarUsuario/:idEmployee/:puesto"
          render={(props)=>
            <VentanaEditarUsuario {...props}/>
          }/>
        <Route path='/eliminarUsuario' exact={true}>{user?<Deshabilitar/>:<Redirect to='/login'/>}</Route>
        <Route path='/user-not-found1' exact={true}>{user?<UsuarioNoEncontrado1/>:<Redirect to='/login'/>}</Route>

        <Route path='/administrarProspectos' exact={true}>{user?<LandingAdminProspectos/>:<Redirect to='/login'/>}</Route>
        <Route path='/contactarProspecto' exact={true}>{user?<ContactoAsesor/>:<Redirect to='/login'/>}</Route>
        <Route path='/agregarProspectos' exact={true}>{user?<AgregarProspecto/>:<Redirect to='/login'/>}</Route>
        <Route 
          path="/editarProspecto/:idProspect"
          render={(props) => 
            <EditarProspecto {...props}/>
          }/>

        <Route path='/solicitudCliente/:idProspect'
                exact={true}
                render={(props) => 
           <SolicitudCliente {...props}/>
          }/>  
        <Route path='/administrarClientes' exact={true}>{user?<AdministracionClientesAsesor/>:<Redirect to='/login'/>}</Route>


        <Route path='/user-not-found2' exact={true}>{user?<UsuarioNoEncontrado2/>:<Redirect to='/login'/>}</Route>
        <Route path='/user-not-found21' exact={true}>{user?<UsuarioNoEncontrado21/>:<Redirect to='/login'/>}</Route>
        <Route path='/editarSolicitudCliente/:idProspect' 
              exact={true}
              render={(props) => 
                <EditarSolicitudCliente {...props}/>
               }/>
        
        <Route path='/solicitudes' exact={true}>{user?<LandingAnalista/>:<Redirect to='/login'/>}</Route>
        <Route path='/seguimientoCliente1' exact={true}>{user?<SeguimientoCliente1/>:<Redirect to='/login'/>}</Route>
        <Route path='/seguimientoCliente2' exact={true}>{user?<SeguimientoCliente2/>:<Redirect to='/login'/>}</Route>
        <Route path='/seguimientoCliente3' exact={true}>{user?<SeguimientoCliente3/>:<Redirect to='/login'/>}</Route>
        <Route path='/user-not-found3' exact={true}>{user?<UsuarioNoEncontrado3/>:<Redirect to='/login'/>}</Route>
        
        <Route path='/' exact={true}>{user?<NavegacionDemo/>:<Redirect to='/login'/>}</Route>
        <Route>¡Ups! Parece que esta ruta todavía no te llevará a ninguna parte :c</Route>
      </Switch>
    </Router>
  );
}

export default App;