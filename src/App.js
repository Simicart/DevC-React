import React, {useState, useEffect, useContext} from 'react';
import logo from './logo.svg';
import './App.css';

const Themes = {
  light: {
    background: "red",
    color: "white"
  },
  dark: {
    background: "green",
    color: "yellow"
  }
}


const MyContext = React.createContext(Themes.dark);

const MyTheme = (props) => {

    const theme = useContext(MyContext);

    console.log('my theme is ', theme.name)

    return <div>My theme is {theme.name}</div>;
}

const ThemeChange = (props) => {

    const theme = useContext(MyContext);

    const isSelected = (themeName) => {
      if (theme.name === themeName) return "selected";
      return "";
    }

    console.log(theme)

    // const theTheme = Themes[theme.name];

    return (
      <select onChange={(e) => theme.changeTheme(e.target.value)}
        style={{color: theme.theme.color, backgroundColor: theme.theme.background}}
      >
        <option value="dark" selected={isSelected("dark")}>Dark</option>
        <option value="light" selected={isSelected("light")}>Light</option>
      </select>
    );
}



class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeTheme = (value) => {
      this.setState(state => ({
        theme:
          state.theme === Themes.dark
            ? Themes.light
            : Themes.dark,
        name: value
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      name: "light",
      theme: Themes.light,
      changeTheme: this.changeTheme,
    };
  }

  render(){
    return (
      <MyContext.Provider value={this.state}>
        <MyTheme />
        <ThemeChange />
      </MyContext.Provider>
    );
  }
}

export default App;
