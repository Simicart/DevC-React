import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos'
import Toggle from './Toggle'
import Login from './Login'

class CountDown extends React.Component{
  constructor(props) {
    super(props)
    this.state = {counter : 15}
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
    
  }

  tick() {
    let counter = this.state.counter
    counter -= 1
    this.setState({
      counter: counter
    })
  }

  render() {
    if (this.state.counter === 0) {
      clearInterval(this.timerID);
    }
    return(
      <div>
        <h1>CountDown</h1>
        <h2>Time remaining: {this.state.counter}</h2>
      </div>
    )
  }
}

function App() {
  return(
    <div>
      <Login/>
    </div>
  )
}
export default App;
