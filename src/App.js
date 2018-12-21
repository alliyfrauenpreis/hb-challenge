import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import HelloWorld from './scripts/containers/hello-world/hello-world';

class App extends Component {
  render() {
    return (
      <div className="app">
		<img src={logo} alt="Heartbeat" />
		<HelloWorld />
      </div>
    );
  }
}

export default App;
