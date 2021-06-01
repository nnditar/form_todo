import React, {useState} from 'react';
import './App.css'
import TodoList from './components/TodoList';
import Forms from './components/Forms';
import Todo from './components/Todo';


class  App extends React.Component {
  constructor (props) {
    super(props) ;
    this.state={
      todos: []   
    }
    //1ère manière
    // this.addTodo=this.addTodo.bind(this);
  }

  addTodo (todo) {
    let newTodos = this.state.todos;
    newTodos.push({...todo, completed: false, 
      id: Math.random() * 10000});
      let state= {todos:newTodos}
    this.setState(state); 
   }

  deleteTodo (id){
    let todosFiltered = this.state.todos.filter((el) => el.id !== id);
    this.setState({todos:todosFiltered})
    }
  render() {

    return (
      <div className="'todo-app">
        <h1>Hello </h1>
        
        <Forms addTodo= { (todoToAdd) => this.addTodo(todoToAdd)}/>
        <TodoList deleteTodo= { (idDelete) => this.deleteTodo (idDelete)} todos={this.state.todos}/>
        
      </div>
    )
  }

  }


export default App