import React from 'react';
import './LandingAdminUsuarios.css';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import InputBuscar from './InputBuscar';
import TablaUsuarios from './TablaUsuarios';
import InputFiltrar from './InputFiltrar';
import admin from './assets/persona.svg';
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
      

    return(
         <main>
            <aside>
                 <Lateral img = {admin} usuario="Admin #1234" tabs={tabs}/>
            </aside>
            <section className='contentPage'>
                <header>
                    <Bienvenida txtBienvenida = "Bienvenido, Administrador" txtVentana="Administración de usuarios"/>
                </header>
                <section className="filtrosContentPageLanding">
                    <InputBuscar num={1} />
                    <InputFiltrar />
                </section>
                <section className="tablaContentPage">
                    <TablaUsuarios {...dataQuery} />
                </section>
            </section>
        </main>
    );
}

export default LandingAdminUsuarios;