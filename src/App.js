import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.png';
import './App.css';
import {createStore} from 'redux'

import ToDoItem from './scripts/containers/todo/todoItem';
import ToDoCreator from './scripts/containers/todo/todoCreator';

import todoApp from './scripts/containers/todo/reducer'
import addTodo from './scripts/containers/todo/addTodo'
import removeTodo from './scripts/containers/todo/removeTodo'

class App extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="app">
          <h1>Basic To-Do App</h1>
      	  <ul>
    		    {this.props.todos.map(todo => (
    		      <ToDoItem {...todo}/>
    		    ))}
    		  </ul>
		  <ToDoCreator/>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(App);

