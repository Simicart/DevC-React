import React, {useState, useRef} from 'react';
import RadioInput from './Radio';

const Channel = (props) => {
    const [value, setValue] = useState('skype');

    const changeValue = (value) => {
        console.log(value)
        setValue(value);
    }

    return (
        <div className={"channel"} {...props}>
            <RadioInput id="1" label="Skype" name="skype" value="skype" handleChange={changeValue} selected={value}/>
            <RadioInput id="1" label="Whatsapp" name="whatsapp" value="whatsapp" handleChange={changeValue} selected={value}/>
            <RadioInput id="1" label="Phone" name="phone" value="phone" handleChange={changeValue} selected={value}/>
        </div>
    );
}


export default Channel