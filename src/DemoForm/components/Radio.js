import React, {useState, useRef} from 'react';

const Radio = (props) => {
    const [value, setValue] = useState(props.selected);
    const inputRef= useRef('');

    const handleClick = (e) => {
        if (inputRef) {
            if (props.handleChange) {
                props.handleChange(inputRef.current.value);
            }
            setValue(props.value);
        }
    }

    const selected = (props.selected === props.value);

    return (
        <>
            <input id={props.id} type="radio" 
                name={props.name} value={props.value} 
                onClick={handleClick} onChange={handleClick} 
                ref={inputRef} 
                checked={selected} />
            <label htmlFor={props.id}>{props.label}</label>
        </>
    );
}


export default Radio