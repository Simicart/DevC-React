import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Input from "./components/Input/Input";
import Form from "./components/Form/Form";
import CheckBox from "./components/CheckBox/CheckBox";
import Radio from "./components/Radio/Radio";

const data = [
  {
    id: 1,
    type: "text",
    placeholderText: "Fname",
    value: "",
    required: true,
    name: "fname"
  },
  {
    id: 2,
    type: "text",
    placeholderText: "Email",
    value: "",
    required: true,
    name: "email"
  },
  {
    id: 3,
    type: "radio",
    placeholderText: "",
    selected: "skype",
    radios: [
      {
        id: 11,
        value: "skype",
        text: "Skype",
        required: true,
        name: "contact"
      },
      {
        id: 12,
        value: "whatsapp",
        text: "WhatApps",
        required: true,
        name: "contact"
      },
      {
        id: 23,
        value: "phone",
        text: "Phone",
        required: true,
        name: "contact"
      }
    ]
  },
  {
    id: 4,
    type: "text",
    placeholderText: "Website Url",
    value: "",
    required: true,
    name: "website"
  },
  {
    id: 5,
    type: "text",
    placeholderText: "What problem are you trying to solve",
    value: "",
    required: true,
    name: "problem"
  },
  {
    id: 6,
    type: "checkbox",
    value: "nativeapp",
    text: "Native App",
    required: true,
    name: "nativeapp",
    checked: false
  },
  {
    id: 7,
    type: "checkbox",
    value: "pwa",
    required: true,
    name: "pwa",
    checked: false,
    text: "Progressive Web App"
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      selected: "skype"
    };
  }

  _handleChangeRadio = async (value, name) => {
    await this.setState(prevState => ({
      selected: value,
      [value]: ""
    }));
    this.setState(prevState => ({
      result: { ...prevState.result, [this.state.selected]: value }
    }));
  };

  _handleChecked = (name, checked, value) => {
    this.setState(prevState => ({
      result: { ...prevState.result, [name]: value }
    }));
  };
  _handelChangeText = async (value, name) => {
    await this.setState(prevState => ({
      [name]: value,
      result: { ...prevState.result, [name]: value }
    }));
    console.log(this.state.result);
  };

  _renderTextInput = (item, index) => {
    return (
      <Input
        key={index.toString()}
        type={item.type}
        placeHolderText={item.placeholderText}
        value={this.state[item.name]}
        required={item.required}
        onTextChange={this._handelChangeText}
        name={item.name}
      />
    );
  };

  _renderCheckBox = (item, index) => {
    return (
      <div key={item.id.toString()}>
        <CheckBox
          name={item.name}
          value={item.value}
          onChecked={this._handleChecked}
          text={item.text}
        />
      </div>
    );
  };

  _renderRadio = (item, index) => {
    return (
      <div className="radio-list" key={index.toString()}>
        <span className="subtitle">
          Please choose your prefered contact channel *
        </span>
        <Radio
          radios={item.radios}
          onChangeValue={this._handleChangeRadio}
          selected={item.selected}
        />
        {this._renderTextInput2()}
      </div>
    );
  };

  _renderTextInput2 = () => {
    const text = this._renderText();
    return (
      <Input
        type="text"
        placeHolderText={text}
        value={this.state[this.state.selected]}
        name={this.state.selected}
        onTextChange={this._handelChangeText}
      />
    );
  };

  _renderText = () => {
    const { selected } = this.state;
    switch (selected) {
      case "skype":
        return "Skype";
      case "whatsapp":
        return "What App";
      case "phone":
        return "Phone";
      default:
        break;
    }
  };

  render() {
    return (
      <div className="box">
        <h2 className="title">Book a Demo</h2>
        <Form
          data={data}
          renderTextInput={this._renderTextInput}
          renderCheckBox={this._renderCheckBox}
          renderRadio={this._renderRadio}
          onSubmit={() => {
            console.log(this.state.result);
          }}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
