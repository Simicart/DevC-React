import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { thisExpression } from '@babel/types';
import ConvertTemp  from './Temperature';
//luu y ve bind this
/*
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

*/
class SubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            jobtitle: '',
            selectedOption: '1', //1 skype, 2 whatsapp , 3 phone
            contactInfo: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeJobTitle = this.handleChangeJobTitle.bind(this);
        this.handleChangeContact = this.handleChangeContact.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleSubmit(e) {
        if (this.validate()) {

        }
        e.preventDefault();
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    handleChangeJobTitle(event) {
        this.setState({
            jobtitle: event.target.value
        })
    }
    handleChangeContact (event) {
        this.setState({
            contactInfo: event.target.value
        })
    }
    validate() {
        if (this.state.name === '') {
            alert('Name is not empty');
            return false;
        } else if (this.state.email === '') {
            alert('Email is not empty');
            return false;
        } else if (this.state.jobtitle === '') {
            alert('Jobtitle  is not empty');
            return false;
        }
    }
    handleOptionChange (changeEvent) {
        this.setState({
          selectedOption: changeEvent.target.value
        });
      }

    renderContact () {
        
        let label = 'Skype';
        if (this.state.selectedOption=== '2'){
            label = 'Whatsapp';
        } else if (this.state.selectedOption=== '3'){
            label = 'Phone';
        }
        console.log('(this.state.selectedOption=== 3', this.state.selectedOption);
        console.log('label ', label);
        return   <label>
        {label}
          <input type="text" value={this.state.contactInfo} onChange={this.handleChangeContact} />
    </label>
    }
    render() {

        return <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                  <input type="text" value={this.state.name} onChange={this.handleChangeName} />
            </label>
            <br />
            <label>
                Email:
                  <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
            </label>
            <br />
            <label>
                Jobtitle:
                  <input type="text" value={this.state.jobtitle} onChange={this.handleChangeJobTitle} />
            </label>
            <br />
            <label>
                <input type="radio" value="1" 
                      checked={this.state.selectedOption === '1'}
                      onChange={this.handleOptionChange} 
                      />
                Skype
            </label>
            <label>
                <input type="radio" value="2" 
                      checked={this.state.selectedOption === '2'}
                      onChange={this.handleOptionChange}  />
                Whatsapp
            </label>
            <label>
                <input type="radio" value="3" 
                      checked={this.state.selectedOption === '3'}
                      onChange={this.handleOptionChange}  
                      />
                Phone
            </label>
            <br />
            {this.renderContact()}
            <input type="submit" value="Submit" />
        </form>;
    }
}
ReactDOM.renderConvertTemp  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
