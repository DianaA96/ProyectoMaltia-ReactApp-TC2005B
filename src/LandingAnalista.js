import React from 'react';
import './LandingAdminUsuarios.css'; //Toma estilos de Vista con mismas clases
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import InputBuscar from './InputBuscar';
import TablaClientes from './TablaClientes';
import InputFiltrar from './InputFiltrar';
import  analista from './assets/analista.png';
import './Boton.css';

function LandingAnalista() {

    let datosProspect = {
        data: [
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Dispuesto"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Dispuesto"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"}
        ]
      };

    let tabs = ["Solicitudes", "Generar reportes"];

    return(
        <main>
            <aside>
                <Lateral img = {analista} usuario="Analista #1234" tabs={tabs}/>
            </aside>
            <section className='contentPage'>
                <header>
                    <Bienvenida txtBienvenida = "Bienvenido, analista" txtVentana="Administración de solicitudes"/>
                </header>
                <section className="filtrosContentPageLanding">
                    <InputBuscar num={3} />
                    <InputFiltrar />
                </section>
                <section className="tablaContentPage">
                    <TablaClientes {...datosProspect} />
                </section>
            </section>
        </main>
        
    );
}

export default LandingAnalista;