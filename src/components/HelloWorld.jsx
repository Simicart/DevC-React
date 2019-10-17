import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class HelloWorld extends Component{
    render(){
        return(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
        );
    }
}

