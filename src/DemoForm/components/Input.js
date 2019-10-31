import React, {useState, useEffect, useRef} from 'react';

const Input = (props) => {
    
    const [inputValue, setInputValue] = useState('');
	const inputRef= useRef('');
	const formRowRef = useRef('');

    const handleInputValue = (e) => {
        if (inputRef) {
            console.log(inputRef.current.value);
            setInputValue(inputRef.current.value);
		}
	}
	
	const handleFocusIn = (e) => {
		if( formRowRef ){
			formRowRef.current.classList.add('focus');
		}
	}

	const handleFocusOut = (e) => {
		if (formRowRef) {
			formRowRef.current.classList.remove('focus');
		}
	}

    return (
        <div className={props.className} ref={formRowRef}>
            <label htmlFor={`id-input-${props.name}`}>{props.label}</label>
            <input type="text" id={`id-input-${props.name}`} name={props.name} value={inputValue} onChange={handleInputValue} ref={inputRef} onFocus={handleFocusIn} onBlur={handleFocusOut}/>
        </div>
    );
}


export default Input