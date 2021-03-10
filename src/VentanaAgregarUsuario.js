import React from 'react';
import './LandingAdminUsuarios.css';
import Lateral from './Lateral';
import Bienvenida from './Bienvenida';
import RadioButton from './RadioButton';

function LandingAdminUsuarios() {
    return(
        <React.Fragment>
            <main>
                <aside>
                    <Lateral />
                </aside>
                <section className='contentPage'>
                    <header>
                        <Bienvenida txtbienvenida = "Bienvenido, Administrador" txtventana="Agregar Usuario"/>
                    </header>
                    <section className="radiosContentPage">
                        <RadioButton/>
                        <RadioButton/>
                    </section>
                    <section className="tablaContentPage">
                        
                    </section>
                </section>
            </main>
        </React.Fragment>
    );
}

export default LandingAdminUsuarios;