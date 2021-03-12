import './Boton.css';
import './deshabilitar.css';
import Advertencia from './img/advertencia.png';
function Deshabilitar(){
    return(
        <div className='err'>
            <div className='cabeza'>
                <i class="fas fa-exclamation-triangle"></i>
                <p className='eliminando'>Eliminando usuario</p>
            </div>
            <div className='centro'>
                <p className='us'>Harry José  Potter Hernández</p>
                <p className='num'>#151561561</p>
                <p className='pregunta'>¿Está seguro de  deshabilitar a este usuario?</p>
            </div>
            <div className='btns'>
            <button href=""  className="botonAzulMarino">Cancelar</button>
            <button href=""  className="botonSalmon">Confirmar</button>
            </div>
        </div>
    );
}
export default Deshabilitar;