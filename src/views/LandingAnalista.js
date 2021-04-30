import React, { useState } from 'react';
import './LandingAnalista.css';
import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import InputBuscar from '../components/InputBuscar';
import TablaClientes from '../components/TablaClientes';
import InputFiltrar from '../components/InputFiltrar';
import analista from '../assets/analista.png';
import '../components/Boton.css';

function LandingAnalista() {

    let tabs = ["Solicitudes", "Generar reportes"];
    const [TabFocus, setTabFocus] = useState(0);

    return(
        <main>
            <aside>
                <Lateral 
                    img = {analista} 
                    TabFocus={TabFocus} 
                    setTabFocus ={setTabFocus} 
                    usuario={`http://localhost:5000/employees/assessor?thisAssessor=zorro14`} 
                    tabs={tabs}
                />
            </aside>
            <section className='contentPage'>
                <header>
                    <Bienvenida txtBienvenida = "Bienvenido, Analista" txtVentana="Administración de solicitudes"/>
                </header>
                <section className="filtrosContentPageLanding">
                </section>
                <section className="tablaContentPageAnalista">
                    <TablaClientes/>
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
                        <p className="gris">Crédito en revisión</p>
                    </div>
                </section>
            </section>
        </main>
        
    );
}

export default LandingAnalista;