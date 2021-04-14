import './Boton.css';
import './deshabilitar.css';
import CustomLink from '../components/CustomLink';
import Advertencia from './assets/advertencia.png';

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
                <CustomLink tag='button' to='./administrarUsuarios' className="botonAzulMarino">Cancelar</CustomLink>
                <CustomLink tag='button' to='./administrarUsuarios' className="botonSalmon">Confirmar</CustomLink>
            </div>
        </div>
    );
}
export default Deshabilitar;