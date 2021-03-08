import React from "react";
import "./DropMenu.css"

function DropMenu(){
    return(
            <div  className="menu">
                <select>
                    <option value ="">Perrito</option>
                    <option value ="">Gato</option>
                    <option value ="">sorro</option>
                    <option value ="">pez</option>
                </select>
                <i class="triangle"></i>
            </div>
    )
}

export default DropMenu;