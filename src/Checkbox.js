import './Checkbox.css'

function CheckBox(){
    return(
        <div class="cont-component">
            <label class="container-check"> 
                <input class="checkbox" type="checkbox"/>
                <span class="checkmark"></span>
            </label>
        </div>
    )
}


export default CheckBox;