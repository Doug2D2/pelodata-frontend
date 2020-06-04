import React, { Component } from 'react';
import './App.css';
import Navbar from '../src/components/navbar/Navbar';
import CreateProgram from '../src/components/createProgram/CreateProgram';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <CreateProgram />
      </div>
    );
  }
}

export default App;
