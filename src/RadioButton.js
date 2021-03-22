import './RadioButton.css'

function RadioButton(props){
    return(
        <div className="cont-component">
            <label className="container-radio"> {props.etiqueta}
                <input type="radio" name="radio"/>
                <span className="checkmark"></span>
            </label>
        </div>
    )
}


export default RadioButton;