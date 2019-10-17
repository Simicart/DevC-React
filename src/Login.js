import React, { Component } from 'react';
import {
    AppBar,
    TextField
} from '@material-ui/core'
import './Login.css'

export default class Login extends Component {
 


    skypeContact = () => {
        return (
            <div>
                <input type="text" id="name" placeholder="Enter your Skype name" required /> 
                <input type="url" id="name" placeholder="Website URL" required /> 
            </div>
        )
    }

    whatsappContact = () => {
        return (
            <div>
                <input type="text" id="name" placeholder="Enter your Whatsapp name" required /> 
                <input type="url" id="name" placeholder="Website URL" required /> 
            </div>
        )
    }

    phoneContact = () => {
        return (
            <div>
                <input type="text" id="name" placeholder="Enter your Phone number" required /> 
            </div>
        )
    }

    render() {
        return (
          <div className="Container">
            <AppBar color="#FFFFFF" position="static">
                <h2>Book a demo</h2>
            <TextField
                id="Name"
                label="Name"
                className="Input"
                //value={values.name}
                margin="normal"
            />
            <TextField
                id="Email"
                label="Email"
                className="Input"
                //value={values.name}
                margin="normal"
            />
            <TextField
                id="Job"
                label="Job Title"
                className="Input"
                //value={values.name}
                margin="normal"
            />
              <div class="ChooseStyle">
                <h4> Please choose your prefered contact channel *</h4>
                <input className="InputStyle" type="checkbox" id="Skype" value="0" /> Skype 
                <input className="InputStyle" type="checkbox" id="Whatsapp" value="1"/> Whatsapp
                <input className="InputStyle" type="checkbox" id="Phone" value="2"/> Phone
                
              </div>
              <div>
                {}
              </div>
              <div>
                <h4>I'm interested in : *</h4>
                <input type="checkbox" name="Skype" value="Bike"/> Natvie App
                <input type="checkbox" name="Skype" value="Bike"/> Progressive Web App
              </div>
            </AppBar>
              
          </div>  
        );
    }
}