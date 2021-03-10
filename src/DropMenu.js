import React from "react";
import "./DropMenu.css"

function DropMenu(props){
    return(
            <div  className="menu">
                <select>
                    <option default>{props.contenido}</option>
                    <option value ="">Perrito</option>
                    <option value ="">Gato</option>
                    <option value ="">sorro</option>
                    <option value ="">pez</option>
                </select>
                <i class="fas fa-caret-down triangle"></i>
            </div>
    )
}

export default DropMenu;