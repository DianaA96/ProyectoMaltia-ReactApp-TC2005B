import React from 'react';
import './LandingAdminUsuarios.css';
import CustomLink from './CustomLink';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import InputBuscar from './InputBuscar';
import TablaProspectos from './TablaProspectos';
import InputFiltrar from './InputFiltrar';
import asesor from './assets/asesor.png';
import './Boton.css'

function LandingAdminProspectos() {

    let datosProspect = {
        data: [
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
            {nombres: "Harry José", apellidos: "Potter Hernández"},
        ]
      };

    let tabs = ["Administrar prospectos", "Agregar prospectos","Administrar clientes"];

    
    return(
        <main>
            <aside>
                <Lateral img = {asesor} usuario="Asesor #1234" tabs={tabs} />
            </aside>
            <section className='contentPage'>
                <header>
                    <Bienvenida txtBienvenida = "Bienvenido, Asesor" txtVentana="Administración de prospectos"/>
                </header>
                <section className="filtrosContentPageLanding">
                    <InputBuscar num={1} />
                    <InputFiltrar />
                </section>
                <section className="tablaContentPage">
                    <TablaProspectos {...datosProspect} />
                </section>
            </section>
        </main>
    );
}

export default LandingAdminProspectos;