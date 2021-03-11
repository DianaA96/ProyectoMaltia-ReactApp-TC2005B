import React from 'react';
import './LandingAdminUsuarios.css';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import InputBuscar from './InputBuscar';
import TablaUsuarios from './TablaUsuarios';
import admin from './persona.svg';
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

      let tabs = ["Administrar Usuarios", "Agregar Usuario"];
      let enlaces = ["./", "./nuevo-usuario"]

    return(
        
        <React.Fragment>
            <main>
                <aside>
                    <Lateral img = {admin} usuario="Admin #1234" tabs={tabs} enlaces={enlaces}/>
                </aside>
                <section className='contentPage'>
                    <header>
                        <Bienvenida txtbienvenida = "Bienvenido, Administrador" txtventana="Administración de usuarios"/>
                    </header>
                    <section className="filtrosContentPageLanding">
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