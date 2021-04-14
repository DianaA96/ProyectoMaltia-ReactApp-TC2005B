import React from 'react';
import './LandingAnalista.css';
import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import InputBuscar from '../components/InputBuscar';
import TablaClientes from '../components/TablaClientes';
import InputFiltrar from '../components/InputFiltrar';
import  analista from '../assets/analista.png';
import '../components/Boton.css';

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
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoAutorizado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoRevisado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "NoRevisado"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Pendiente"},
            {nombres: "Harry José", apellidos: "Potter Hernández", estatusCliente: "Dispuesto"},
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
                        <p className="verde">Crédito autorizado</p>
                    </div>
                    <div className='tarjetaSemaforo'>
                        <p className="semaforoRojo"></p>
                        <p className="rojoEncendido">Crédito no autorizado</p>
                    </div>
                    <div className="tarjetaSemaforo">
                        <p className="semaforog"></p>
                        <p className="gris">Crédito no revisado</p>
                    </div>
                    <div className="tarjetaSemaforo">
                        <p className="semaforor"></p>
                        <p className="gris">Crédito dispuesto</p>
                    </div>
                </section>
            </section>
        </main>
        
    );
}

export default LandingAnalista;