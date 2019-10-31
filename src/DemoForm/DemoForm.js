import React, {useState, useEffect, useReducer} from 'react';
import Input from './components/Input';
import Channel from './components/Channel';
import './style.css';

const DemoForm = (props) => {
    
    const [formValues, setFormValues] = useState({});

    const [state, dispatch] = useReducer();

    return (
        <div className={props.className || "form-wrap"}>
            <h1>Book a demo</h1>
            <form>
				<Input className="name form-row" name="name" label="Name" />
				<Input className="email form-row" name="email" label="Email" />
				<Input className="job-title form-row" name="job-title" label="Job Title" />
                <Channel />

            </form>
        </div>
    );
}


export default DemoForm