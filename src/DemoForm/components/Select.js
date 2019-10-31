import React, {useState, useEffect, useRef} from 'react';

const Input = (props) => {
    
    const [inputValue, setInputValue] = useState('');
    const inputRef= useRef('');

    const handleInputValue = (e) => {
        if (inputRef) {
            console.log(inputRef.current.value);
            setInputValue(inputRef.current.value);
        }
    }

    return (
        <div className={props.className}>
            <label htmlFor={`id-input-${props.name}`}>{props.label}</label>
            <input id={`id-input-${props.name}`} name={props.name} value={inputValue} onChange={handleInputValue} ref={inputRef} />
        </div>
    );
}


export default Input