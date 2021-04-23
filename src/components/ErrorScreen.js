import React from 'react';
import ZorroMaltia from '../assets/zorroMaltiaNotFound.svg';

function ErrorScreen(props) {
    return (
        <section id="cajaUsuarioNoEncontrado">
            <img src={ZorroMaltia} alt='Elemento no encontrado.'/>
            <div>
                <pre>{props.mensaje}<span class="material-icons">error_outline</span></pre>
                <p>Nada por aquí, nada por allá :( </p>
            </div>
        </section>
    );
}

export default ErrorScreen;