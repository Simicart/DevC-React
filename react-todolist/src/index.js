import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import TodoListApp from "./components";

function App() {
  return (
    <div className="container">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TodoListApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
