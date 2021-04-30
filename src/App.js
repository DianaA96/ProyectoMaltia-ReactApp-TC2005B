import React, { useEffect } from 'react';
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
import VentanaInicioSesion from './views/VentanaInicioSesion'; 

//Vistas Administrador
import LandingAdminUsuarios from './views/LandingAdminUsuarios'; 
import VentanaAgregarUsuario from './views/VentanaAgregarUsuario'; 
import VentanaEditarUsuario from './views/VentanaEditarUsuario';
import Deshabilitar from './views/ModalDeshabilitarEmpleado'; 
import UsuarioNoEncontrado1 from './views/UsuarioNoEncontrado1'; 

//Vistas Asesor
import LandingAdminProspectos from './views/LandingAdminProspectos';
import ContactoAsesor from './views/ModalContactoAsesor'; 
import AgregarProspecto from './views/AgregarProspecto';
import EditarProspecto from './views/EditarProspecto';
import SolicitudCliente from './views/SolicitudCliente'; 
import AdministracionClientesAsesor from './views/AdministracionClientesAsesor';
import EditarSolicitudCliente from './views/EditarSolicitudCliente';
import UsuarioNoEncontrado2 from './views/UsuarioNoEncontrado2';
import UsuarioNoEncontrado21 from './views/UsuarioNoEncontrado2_1';

//Vistas Analista
import LandingAnalista from './views/LandingAnalista'; 
import SeguimientoCliente1 from './views/SeguimientoCliente1'; 
import SeguimientoCliente2 from './views/SeguimientoCliente2'; 
import SeguimientoCliente3 from './views/SeguimientoCliente3'; 
import UsuarioNoEncontrado3 from './views/UsuarioNoEncontrado3';
import NavegacionDemo from './components/NavegacionDemo';

function App() {

  const { user, getToken } = useAuth();
  console.log(user.[0])
  useEffect(() => {
    getToken();
  }, [user])
  
  return (
    <Router>
      <Switch>
        <Route path='/login' exact={true}>
          {user.[0]?<Redirect to='/'/>:<VentanaInicioSesion/>}
        </Route>

        <Route path='/administrarUsuarios' exact={true}>
          {user.[0]?<LandingAdminUsuarios/>:<Redirect to='/login'/>}
        </Route>

        <Route path='/agregarUsuario' exact={true}>
          {user.[0]?<VentanaAgregarUsuario/>:<Redirect to='/login'/>}
        </Route>

        <Route 
          path="/editarUsuario/:idEmployee/:puesto"
          render={(props)=>
            <VentanaEditarUsuario {...props}/>
          }/>

        <Route path='/eliminarUsuario' exact={true}>
          {user.[0]?<Deshabilitar/>:<Redirect to='/login'/>}
        </Route>

        <Route path='/user-not-found1' exact={true}>
          {user.[0]?<UsuarioNoEncontrado1/>:<Redirect to='/login'/>}
        </Route>

        <Route path='/administrarProspectos' exact={true}>
          {user.[0]?<LandingAdminProspectos/>:<Redirect to='/login'/>}
        </Route>

        <Route path='/contactarProspecto' exact={true}>
          {user.[0]?<ContactoAsesor/>:<Redirect to='/login'/>}
        </Route>

        <Route path='/agregarProspectos' exact={true}>
          {user.[0]?<AgregarProspecto/>:<Redirect to='/login'/>}
        </Route>

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

        <Route path='/administrarClientes' exact={true}>
          {user.[0]?<AdministracionClientesAsesor/>:<Redirect to='/login'/>}
        </Route>

        <Route path='/user-not-found2' exact={true}>
          {user.[0]?<UsuarioNoEncontrado2/>:<Redirect to='/login'/>}
        </Route>

        <Route path='/user-not-found21' exact={true}>
          {user.[0]?<UsuarioNoEncontrado21/>:<Redirect to='/login'/>}
        </Route>

        <Route path='/editarSolicitudCliente/:idProspect' 
          exact={true}
          render={(props) => 
        <EditarSolicitudCliente {...props}/>
        }/>

        <Route path='/solicitudes' exact={true}>
          {user.[0]?<LandingAnalista/>:<Redirect to='/login'/>}
        </Route>

        <Route path='/seguimientoCliente1/:idProspect'
          exact={true}
          render={(props) => 
          <SeguimientoCliente1 {...props}/>
         }/>

        <Route path='/seguimientoCliente2/:idProspect'
          exact={true}
          render={(props) => 
          <SeguimientoCliente2 {...props}/>
         }/>

        <Route path='/seguimientoCliente3/:idProspect'
          exact={true}
          render={(props) => 
          <SeguimientoCliente3 {...props}/>
         }/>

        <Route path='/user-not-found3' exact={true}>
          {user.[0]?<UsuarioNoEncontrado3/>:<Redirect to='/login'/>}
        </Route>

        <Route path='/' exact={true}>{user.[0]?<NavegacionDemo/>:<Redirect to='/login'/>}</Route>
        
        <Route>¡Ups! Parece que esta ruta todavía no te llevará a ninguna parte :c</Route>
      </Switch>
    </Router>
  );
}

export default App;