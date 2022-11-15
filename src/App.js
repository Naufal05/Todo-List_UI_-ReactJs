import React, { Component } from "react";
// import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Todo App in ReactJs</h1>
        <Todos />
        {/* <AddTodo /> */}
      </div>
    );
  }
}
export default App;
