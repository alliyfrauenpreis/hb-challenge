import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import ToDoItem from './scripts/containers/todo/todoItem';
import ToDoCreator from './scripts/containers/todo/todoCreator';

class App extends Component {
  render() {
    return (
      <div className="app">
		<ToDoItem/>
		<ToDoCreator/>
      </div>
    );
  }
}

export default App;
