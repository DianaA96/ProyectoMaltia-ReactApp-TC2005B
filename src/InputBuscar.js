import './InputBuscar.css';
import CustomLink from './CustomLink';

function InputBuscar(props){
    return(
        <div class="cont-component">
            <div className="cont-input">
                <input type="search" className="input-search" placeholder="Buscar"/>
                <CustomLink tag="i" to={`./user-not-found${props.num}`} className="input-search"><i class="fas fa-search"></i></CustomLink>
            </div>
        </div>
    )
}


export default InputBuscar;