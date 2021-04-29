import './ToggleSwitch.css'

function ToggleSwitch(props){
    return(
        <div className="cont-component">
            <label className="switch">
                <input 
                    name={props.name} 
                    type="checkbox" 
                    defaultChecked={props.isChecked} 
                    onChange={props.setToggle}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default ToggleSwitch;