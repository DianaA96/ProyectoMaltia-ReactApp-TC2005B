import './RadioButton.css'

function RadioButton(props){
    function toggleSelectVisibility(){
        if(props.etiqueta === 'Analista'){
            props.setSelectStatus('analista');
        }
        else if(props.etiqueta === 'Asesor'){
            props.setSelectStatus('asesor');
        }
    }
    return(
        <div className="cont-component">
            <label className="container-radio"> {props.etiqueta}
                <input 
                    onFocus ={toggleSelectVisibility} 
                    type="radio" 
                    name="radio" 
                    defaultChecked={props.isChecked} 
                />
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default RadioButton;