import React from 'react';
import  "./Input.css";

const Input = (props)=>{

    let inputTypeElement  = null;
    const InputClasses = ["InputElement"];
    if(props.invalid && props.shouldValidate && props.touched)
    {
        InputClasses.push('Invalid');
    }
    switch (props.elementType) {
        case ('input'): inputTypeElement = <input className={InputClasses.join(' ')} onChange={props.changed} {...props.elementConfig} value={props.value}/>
                        break;
        case ('textarea'): inputTypeElement = <textarea className={InputClasses.join(' ')} onChange={props.changed} {...props.elementConfig} value={props.value}/>
                        break;
        case ('select'): inputTypeElement = <select className={InputClasses.join(' ')} onChange={props.changed} value={props.value}>
                            {props.elementConfig.options.map(option=>(<option key={option.value} value={option.value}>{option.displayValue}</option>))}
                        </select>
                        break;
        default: inputTypeElement = <input className={InputClasses.join(' ')} onChange={props.changed} {...props.elementConfig} value={props.value}/>
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