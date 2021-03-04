import './radioButton.css'

function RadioButton(){
    return(
        <div class="cont-component">
            <label class="container-radio"> Analista
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
            </label>
        </div>
    )
}


export default RadioButton;