import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Todo from './Components/Todo'

class App extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      toDoList: [],
      userInput: ''
    }
  }

  handleChange(input) {
    this.setState({
      userInput: input
    })
  }

  handleClick() {
    let newToDoList = [...this.state.toDoList, this.state.userInput]
    this.setState({
      toDoList: newToDoList,
      userInput: ''
    })
  }

  writeListItem() {
    let newToDoList = this.state.toDoList.map( (element, index) => {
      return <Todo key={index} toDoItem={element} />
    })
    return newToDoList
  }

  render() {
    console.log(this.state.toDoList)
    return (
      <div className="App">

        <h1>My to-do List: </h1>
        <div>
          <input 
            value={this.state.userInput}
            placeholder="Enter New Task"
            onChange={event => this.handleChange(event.target.value)} />
          

          <button
            onClick={() => this.handleClick()}>
          Add </button>

        </div>
      {this.writeListItem()}
      </div>
    );
  }
}
export default App;
