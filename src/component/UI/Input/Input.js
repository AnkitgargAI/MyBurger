import React from 'react';
import  "./Input.css";

const Input = (props)=>{

    let inputTypeElement  = null;
    switch (props.inputType) {
        case ('input'): inputTypeElement = <input className="InputElement" {...props.elementConfig} value={props.value}/>
                        break;
        case ('textarea'): inputTypeElement = <textarea className="InputElement" {...props.elementConfig} value={props.value}/>
                        break;
        default: inputTypeElement = <input className="InputElement" {...props.elementConfig} value={props.value}/>
                        break;
    }
    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputTypeElement}
        </div>
    )
}
export default Input;