import './UsuarioNoEncontrado.css';
import ZorroMaltia from './img/zorroMaltiaNotFound.svg';

function UsuarioNoEncontrado() {
    return (
      <section id='cajaUsuarioNoEncontrado'>
          <div>
                <img src={ZorroMaltia} alt='Elemento no encontrado.'/> 
          </div>
          <div>
                <h1>Parece que tu búsqueda no ha arrojado resultados.</h1>
                <p>Prueba con otro usuario :)</p>
          </div>
      </section>
    );
  }
  
  export default UsuarioNoEncontrado;