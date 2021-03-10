import React from 'react';
import './LandingAdminUsuarios.css';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import InputBuscar from './InputBuscar';
import TablaUsuarios from './TablaUsuarios';
import Boton from './Boton';

function LandingAdminUsuarios() {

    let dataQuery = {
        data: [
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Analista"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Asesor"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Analista"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Analista"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Analista"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Asesor"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Asesor"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Asesor"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Asesor"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Analista"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Analista"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Analista"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Analista"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Analista"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Analista"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Analista"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Analista"},
          {nombres: "Harry José", apellidos: "Potter Hernández", puesto: "Analista"}
        ]
      };

    return(
        <React.Fragment>
            <main>
                <aside>
                    <Lateral />
                </aside>
                <section className='contentPage'>
                    <header>
                        <Bienvenida txtbienvenida = "Bienvenido, Administrador" txtventana="Administración de usuarios"/>
                    </header>
                    <section className="filtrosContentPage">
                        <InputBuscar />
                        <InputBuscar />
                    </section>
                    <section className="tablaContentPage">
                        <TablaUsuarios {...dataQuery} />
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default LandingAdminUsuarios;