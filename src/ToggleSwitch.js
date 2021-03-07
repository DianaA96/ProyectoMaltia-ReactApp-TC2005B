import './ToggleSwitch.css'

function ToggleSwitch(){
    return(
        <div class="cont-component">
            <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
            </label>
        </div>
    )
}


export default ToggleSwitch;