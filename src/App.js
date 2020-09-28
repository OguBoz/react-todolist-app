import React from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Walk the dog",
        finished: false
      },
      {
        id: 2,
        title: "Eat food",
        finished: false
      },
      {
        id: 3,
        title: "Go to gym",
        finished: true
      }
    ]
  }

  onAdd = (text) => {
    const newElm = {
           id: this.state.todos.length + 1,
           title: text,
           finished: false
        }
    this.setState(state => ({
      todos: [...state.todos, newElm]
    }))
  }

  onComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id === id) {
          todo.finished = !todo.finished
        }
        return todo
      })
    })
  }

  onDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id != id
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My todo list</h1>
        <AddTodo onAdd={this.onAdd} />
        <Todos todos={this.state.todos} onComplete={this.onComplete} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
