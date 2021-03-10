import './RadioButton.css'

function RadioButton(props){
    return(
        <div class="cont-component">
            <label class="container-radio"> {props.etiqueta}
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
            </label>
        </div>
    )
}


export default RadioButton;