import React, {useState, useEffect} from 'react';
import './LandingAdminUsuarios.css'; //Toma estilos de Vista con mismas clases
import './AdministracionClientesAsesor.css'
import Lateral from '../components/Lateral';
import Bienvenida from '../components/Bienvenida';
import InputBuscar from '../components/InputBuscar';
import InputFiltrar from '../components/InputFiltrar';
import TablaAdminClientesAsesor from '../components/TablaAdminClientesAsesor';
import asesor from '../assets/asesor.png';
import '../components/Boton.css';


function AdministracionClientesAsesor() {

    let tabs = ["Administrar prospectos", "Agregar prospectos", "Administrar clientes"];
    const [TabFocus, setTabFocus] = useState(2);

    return(
        <main>
            <aside>
                <Lateral img = {asesor} usuario={`http://localhost:5000/employees/assessor?thisAssessor=zorro5`} tabs={tabs} TabFocus={TabFocus} setTabFocus={setTabFocus}/>
            </aside>
            <section className='contentPage'>
                <header>
                    <Bienvenida txtBienvenida = "Bienvenido, Asesor" txtVentana="Administración de clientes"/>
                </header>
                <section className="filtrosContentPageLanding">
                    <InputBuscar num={21} />
                    <InputFiltrar />
                </section>
                <section className="tablaContentPageAsesor">
                    <TablaAdminClientesAsesor/>
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
                </section>
            </section>
        </main>
    );
}

export default AdministracionClientesAsesor;