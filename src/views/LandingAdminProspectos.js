import React from 'react';
import './LandingAdminUsuarios.css';
import CustomLink from '../components/CustomLink';
import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import InputBuscar from '../components/InputBuscar';
import TablaProspectos from '../components/TablaProspectos';
import InputFiltrar from '../components/InputFiltrar';
import asesor from '../assets/asesor.png';
import '../components/Boton.css'

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
                    <InputBuscar num={2} />
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