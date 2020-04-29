import React, { Component} from 'react';
import './App.css';

// components
import Todo from '../src/components/Todo'
import InputBar from '../src/components/InputBar'
import Button from '../src/components/Button'

class App extends Component{
  constructor() {
    super()
    this.state = {
      todos: [{text: "test todo", id: 1}, {text: "another test todo", id: 2}],
      inputValue: undefined,
    }
  }

  render() {
    const { todos } = this.state;
    const toDos = todos.map((todo) => <Todo key={todo.id} id={todo.id} completed={todo.completed} text={todo.text} onChange={() => this.removeTodo(todo.id - 1)}/>)
    return (
      <div className="App">
        <InputBar onChange={this.handleInput}/>
        <Button onClick={this.addTodo}/>
        {toDos}
      </div>
    );
  }

  handleInput = (e) => {
    const { target } = e;
    const { value } = target;
    const inputValueState = value;

    if (inputValueState === '') {
      this.setState({
        inputValue: undefined,
      })
    }
    else {
      this.setState({
        inputValue: inputValueState,
      })
    }
  }

  addTodo = () => {
    const newTodo = {
      text: this.state.inputValue,
      completed: false,
      id: this.state.todos.length + 1,
    }
    this.state.todos.push(newTodo);
  }

  removeTodo = (idx) => {
    const { todos } = this.state;
    todos.splice(todos[idx], 1)
  }
}

export default App;
