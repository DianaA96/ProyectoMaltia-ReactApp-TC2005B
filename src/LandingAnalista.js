import React from 'react';
import './LandingAnalista.css';
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
                    <Bienvenida txtBienvenida = "Bienvenido, Analista" txtVentana="Administración de solicitudes"/>
                </header>
                <section className="filtrosContentPageLanding">
                    <InputBuscar num={3} />
                    <InputFiltrar />
                </section>
                <section className="tablaContentPageAnalista">
                    <TablaClientes {...datosProspect} />
                </section>
                <section className='semaforos'>
                    <div className='tarjetaSemaforo'>
                        <p className="semaforo"></p>
                        <p className="verde">Crédito pendiente</p>
                    </div>
                    <div className="tarjetaSemaforo">
                        <p className="semaforor"></p>
                        <p className="rojo">Crédito dispuesto </p>
                    </div>
                </section>
            </section>
        </main>
        
    );
}

export default LandingAnalista;