import React from 'react';
import './LandingAdminUsuarios.css'; //Toma estilos de Vista con mismas clases
import './AdministracionClientesAsesor.css'
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import InputBuscar from './InputBuscar';
import InputFiltrar from './InputFiltrar';
import TablaAdminClientesAsesor from './TablaAdminClientesAsesor';
import asesor from './assets/asesor.png';
import './Boton.css';


function AdministracionClientesAsesor() {

    let datosProspect = {
        data: [
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Autorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"}
        ]
    };

    let tabs = ["Administrar prospectos", "Agregar prospectos", "Administrar clientes"];

    return(
        <main>
            <aside>
                <Lateral img = {asesor} usuario="Asesor #1234" tabs={tabs}/>
            </aside>
            <section className='contentPage'>
                <header>
                    <Bienvenida txtBienvenida = "Bienvenido, Asesor" txtVentana="Administración de clientes"/>
                </header>
                <section className="filtrosContentPageLanding">
                    <InputBuscar num={2} />
                    <InputFiltrar />
                </section>
                <section className="tablaContentPage">
                    <TablaAdminClientesAsesor {...datosProspect} />
                </section>
            </section>
        </main>
    );
}

export default AdministracionClientesAsesor;